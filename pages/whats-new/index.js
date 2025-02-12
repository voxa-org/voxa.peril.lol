export { default } from '@/components/pages/whats-new';
import { fetchWithCache } from '@/utils/fetchData';

export async function getStaticProps() {
  const data = await fetchWithCache(
    'releases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );

  return {
    props: {
      releases: data,
    },
  };
}
