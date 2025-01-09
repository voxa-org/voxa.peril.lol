/**
 * Analysis:
 * - This plugin uses `unist-util-visit` to walk through the MDAST (Markdown AST).
 * - We only want to transform text nodes that are not children of a link node (i.e., not inside an existing link).
 * - Instead of calling `visit` inside another `visit`, we use a single pass:
 *   `visit(tree, 'text', (node, index, parent, ancestors) => { ... })`.
 * - We then replace text segments matching GitHub-specific patterns (#123, GitHub URLs, @usernames) with link nodes.
 */

import { visit } from 'unist-util-visit';
import { u } from 'unist-builder';

const isInsideLink = (node, ancestors) => {
  // Add null check for ancestors
  return ancestors?.some((ancestor) => ancestor.type === 'link') ?? false;
};

const remarkGithub = (options) => {
  const { defaultOrg, defaultRepo } = options ?? {};

  // [Analysis]: Regex definitions for capturing issue references, GitHub URLs, compare links, and usernames.
  const issueRegex = /#(\d+)/g;
  const fullUrlRegex =
    /https:\/\/github\.com\/([\w-]+)\/([\w-]+)\/(issues|pull)\/(\d+)/g;
  const compareUrlRegex =
    /https:\/\/github\.com\/([\w-]+)\/([\w-]+)\/compare\/([\w.-]+)\.\.\.([\w.-]+)/g;
  const usernameRegex = /@([\w-]+)/g; // Matches @username

  return (tree) => {
    // [Analysis]: Single pass over text nodes in the AST.
    visit(tree, 'text', (node, index, parent, ancestors) => {
      // Skip if we're already inside a link
      if (isInsideLink(node, ancestors)) return;

      const children = [];
      let lastIndex = 0;
      let match;

      function addText(text, start, end) {
        if (start < end) {
          children.push(u('text', text.slice(start, end)));
        }
      }

      // TODO (analysis): Extend logic to handle variations like my-org/my-repo#123 or my-repo#123 if needed.

      // --- 1) Handle issue numbers (e.g., #123) ---
      while ((match = issueRegex.exec(node.value)) !== null) {
        const [fullMatch, issueNumber] = match;
        addText(node.value, lastIndex, match.index);

        // Create a link node to GitHub issues
        children.push(
          u(
            'link',
            {
              url: `https://github.com/${defaultOrg}/${defaultRepo}/issues/${issueNumber}`,
            },
            [u('text', `#${issueNumber}`)]
          )
        );
        lastIndex = match.index + fullMatch.length;
      }

      // --- 2) Handle full GitHub URLs to issues or pull requests ---
      while ((match = fullUrlRegex.exec(node.value)) !== null) {
        const [fullMatch, org, repo, type, number] = match;
        addText(node.value, lastIndex, match.index);

        // Build link text:
        //  - If org is the defaultOrg and repo is the defaultRepo, just #number
        //  - Else show org/repo#number or partial org / partial repo
        const linkText = `${
          org === defaultOrg ? '' : `${org}/`
        }${
          org === defaultOrg && repo === defaultRepo ? '' : repo
        }#${number}`;

        children.push(
          u(
            'link',
            {
              url: `https://github.com/${org}/${repo}/${type}/${number}`,
            },
            [u('text', linkText)]
          )
        );
        lastIndex = match.index + fullMatch.length;
      }

      // --- 3) Handle GitHub compare URLs ---
      while ((match = compareUrlRegex.exec(node.value)) !== null) {
        const [fullMatch, org, repo, tag1, tag2] = match;
        addText(node.value, lastIndex, match.index);

        children.push(
          u(
            'link',
            {
              url: `https://github.com/${org}/${repo}/compare/${tag1}...${tag2}`,
            },
            [u('text', `${tag1}...${tag2}`)]
          )
        );
        lastIndex = match.index + fullMatch.length;
      }

      // --- 4) Handle GitHub usernames (e.g., @someuser) ---
      while ((match = usernameRegex.exec(node.value)) !== null) {
        const [fullMatch, usernameOrOrg] = match;
        addText(node.value, lastIndex, match.index);

        children.push(
          u('link', { url: `https://github.com/${usernameOrOrg}` }, [
            u('text', fullMatch),
          ])
        );
        lastIndex = match.index + fullMatch.length;
      }

      // Add remaining text (from last match to end of string)
      addText(node.value, lastIndex, node.value.length);

      // [Analysis]: If we actually created new nodes, replace the original text node
      if (
        children.length > 1 ||
        (children.length === 1 && children[0].type !== 'text')
      ) {
        parent.children.splice(index, 1, ...children);
      }
    });
  };
};

export default remarkGithub;
