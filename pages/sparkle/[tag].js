// File: pages/sparkle/[tag].js
import React from 'react';
import { fetchWithCache } from '@/utils/fetchData';

// This function tells Next.js which tag values (from releases) exist.
export async function getStaticPaths() {
  const data = await fetchWithCache(
    'releases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );
  let paths = [];
  if (Array.isArray(data)) {
    paths = data.map((release) => ({
      params: { tag: release.tag_name }
    }));
  } else {
    console.error("expected an array of releases, got:", data);
    // Optionally throw an error or set paths to an empty array
  }
  return {
    paths,
    fallback: false // or true / 'blocking' if you want dynamic behavior
  };
}

// This function fetches the release data for the given tag.
export async function getStaticProps({ params }) {
  const { tag } = params;
  const data = await fetchWithCache(
    'releases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );
  const release = Array.isArray(data)
    ? data.find((release) => release.tag_name === tag)
    : null;

  return {
    props: {
      release
    }
  };
}

// The default export must be a React component.
// Here, we render the release details.
export default function SparkleTagPage({ release }) {
  if (!release) {
    return <div>Release not found.</div>;
  }
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{release.name}</h1>
      <p>
        <strong>Tag:</strong> {release.tag_name}
      </p>
      <p>
        <strong>Published:</strong> {new Date(release.published_at).toLocaleDateString()}
      </p>
      {/* For safety, if release.body contains HTML, consider using a Markdown renderer instead */}
      <div dangerouslySetInnerHTML={{ __html: release.body }} />
    </div>
  );
}