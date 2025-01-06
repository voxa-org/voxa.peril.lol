// utils/getMinimumSystemVersion.js

function getMinimumSystemVersion(str) {
  // If `str` is null or undefined, return null (or handle as you prefer).
  if (!str) {
    return null;
  }

  // Regex looks for something like: minimumSystemVersion=12.3
  const regex = /minimumSystemVersion=(\d+\.\d+)/;
  const match = str.match(regex);

  // If there's no match, return null; otherwise, return the version (e.g., "12.3")
  return match ? match[1] : null;
}

export default getMinimumSystemVersion;