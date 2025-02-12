// File: pages/whats-new/raw/[tag].js

export { default } from '@/components/pages/whats-new/RawRelease'
import { fetchWithCache } from '@/utils/fetchData';

export async function getStaticProps({ params }) {
  const { tag } = params;
  const data = await fetchWithCache(
    'releases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );

  return {
    props: {
      release: data.find((release) => release.tag_name === tag) || null,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetchWithCache(
    'releases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );
  
  if (!Array.isArray(data)) {
    console.error('expected an array, got:', data);
    throw new Error('github releases api did not return an array');
  }
  
  const paths = data.map((release) => ({
    params: { tag: release.tag_name }
  }));
  
  return { paths, fallback: false };
}