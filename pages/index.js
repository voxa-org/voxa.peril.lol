// pages/index.js
import { fetchWithCache } from '@/utils/fetchData';
import getMinimumSystemVersion from '@/utils/getMinimumSystemVersion';
export { default } from '@/components/pages/home';

export async function getStaticProps() {
  // Fetch from GitHub
  let data = await fetchWithCache(
    'latestRelease',
    'https://api.github.com/repos/voxa-org/voxa/releases/latest'
  );

  // If `data` is somehow null or undefined, set it to an empty object
  // so we don't access `tag_name` of `undefined`.
  if (!data) {
    data = {};
  }

  // Provide a fallback:
  // If data.tag_name is undefined, store `null` instead.
  const versionNumber = data.tag_name || null;

  // Same idea for `body`; pass a fallback string if `data.body` is undefined
  const minimumSystemVersion = getMinimumSystemVersion(data.body || '');

  return {
    props: {
      versionNumber,             // Now guaranteed to be either a string or null
      minimumSystemVersion,      // Also guaranteed to NOT blow up
    },
    revalidate: 60 * 60 * 24,    // Revalidate once a day
  };
}