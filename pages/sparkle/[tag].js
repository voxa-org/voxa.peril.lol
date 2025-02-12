export async function getStaticPaths() {
  const data = await fetchWithCache(
    'releases',
    'https://api.github.com/repos/voxa-org/voxa/releases'
  );
  let paths = [];
  if (Array.isArray(data)) {
    paths = data.map((release) => ({ params: { tag: release.tag_name } }));
  } else {
    console.error("expected an array of releases, got:", data);
    // optionally, you can throw an error or return empty paths:
    // throw new Error("github releases api did not return an array");
  }
  return {
    paths,
    fallback: false,
  };
}