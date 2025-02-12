import { fetchWithCache } from '@/utils/fetchData';
export { default } from '@/components/pages/download';

export async function getStaticProps() {
  // 1. Fetch all releases
  const releases = await fetchWithCache(
    'allReleases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );
  // This endpoint returns an array of release objects, including prereleases.
  // Source: https://docs.github.com/en/rest/releases/releases#list-releases

  // 2. Find the first release in the array that is marked as prerelease
  // or use some filtering logic if you want a specific prerelease tag
  const preRelease = releases.find((release) => release.prerelease);

  console.log(preRelease);

  // 3. If there's no prerelease found, fall back to whatever logic you like
  const selectedRelease = preRelease || releases[0];

  // 4. Match the dmg asset that looks like Voxa.0.x.dmg
  const appAsset = selectedRelease.assets?.find((asset) =>
    String(asset.name).endsWith('.dmg')
  );

  // 5. Return props
  return {
    props: {
      versionNumber: selectedRelease.tag_name || null,
      downloadUrl: appAsset?.browser_download_url || null,
    },
    revalidate: 60 * 60 * 24, // once every 24 hours
  };
}