import { fetchWithCache } from '@/utils/fetchData';
export { default } from '@/components/pages/download';

export async function getStaticProps() {
  const data = await fetchWithCache(
    'latestRelease',
    'https://api.github.com/repos/plyght/voxa/releases/latest'
  );

  const appAsset = data.assets?.filter((asset) =>
    /^Voxa.*\.dmg$/.test(asset.name)
  )?.[0];

  return {
    props: {
      versionNumber: data.tag_name || null,
      downloadUrl: appAsset?.browser_download_url || null,
    },
    revalidate: 60 * 60 * 24, // revalidate once every 24 hours
  };
}
