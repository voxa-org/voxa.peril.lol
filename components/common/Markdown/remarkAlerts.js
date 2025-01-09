/**
 * [Analysis]: This plugin converts a Markdown blockquote with a special syntax
 * (e.g., [!NOTE]) into a styled "alert" block. It checks the first paragraph node
 * inside each blockquote to see if it begins with a recognized alert code like [!TIP].
 * If so, it:
 *   - Removes the marker ([!TIP], etc.)
 *   - Inserts a label at the top of the blockquote
 *   - Adds corresponding classes to style the alert
 *
 * Potential Issues/Considerations:
 *   1) Safety checks: Ensure we have a paragraph child with text.
 *   2) Preserving existing data.hProperties or className if already present.
 *   3) Avoiding the possibility of empty paragraphs or break tokens causing index issues.
 */

import { visit } from 'unist-util-visit';

const remarkAlerts = () => {
  const alertTypes = [
    { id: 'note', label: 'Note', code: '[!NOTE]' },
    { id: 'tip', label: 'Tip', code: '[!TIP]' },
    { id: 'important', label: 'Important', code: '[!IMPORTANT]' },
    { id: 'warning', label: 'Warning', code: '[!WARNING]' },
    { id: 'caution', label: 'Caution', code: '[!CAUTION]' },
  ];

  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      // [Analysis]: If the blockquote is empty or doesn't have children, skip.
      if (!node.children || node.children.length === 0) return;

      const firstChild = node.children[0];

      alertTypes.forEach((alertType) => {
        // [Analysis]: Check if the first child is a paragraph with text,
        // and if it starts with the alert marker (e.g., [!NOTE]).
        if (
          firstChild?.type === 'paragraph' &&
          firstChild.children?.[0]?.type === 'text' &&
          firstChild.children[0].value.startsWith(alertType.code)
        ) {
          // Remove the alert marker from the paragraph's first text node
          firstChild.children[0].value = firstChild.children[0].value
            .replace(alertType.code, '')
            .trim();

          // [Analysis]: If removing the code marker leaves the text node empty, remove it.
          if (firstChild.children[0].value === '') {
            firstChild.children.shift();
          }

          // [Analysis]: If the next node is a line break, remove it.
          if (firstChild.children[0]?.type === 'break') {
            firstChild.children.shift();
          }

          // [Analysis]: Insert the alert label as a separate paragraph at the top.
          node.children.unshift({
            type: 'paragraph',
            children: [{ type: 'text', value: alertType.label }],
            data: { hProperties: { className: 'alert-label' } },
          });

          // [Analysis]: Add or update classes on the blockquote itself.
          // Ensure we preserve existing data.hProperties or classNames.
          node.data = node.data || {};
          node.data.hProperties = node.data.hProperties || {};
          const existingClasses = node.data.hProperties.className
            ? node.data.hProperties.className.split(' ')
            : [];

          // [Analysis]: Append "alert" and the specific alert type if not already present.
          const newClasses = new Set([...existingClasses, 'alert', alertType.id]);
          node.data.hProperties.className = Array.from(newClasses).join(' ');
        }
      });
    });
  };
};

export default remarkAlerts;
