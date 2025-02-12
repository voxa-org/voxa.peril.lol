// File: utils/fetchData.js

import { fileExists, readFile, writeFile } from './file';
import path from 'path';

export const getCachePath = (id) => {
  const pathName = `./build/cache/${id}.json`;
  return path.resolve(process.cwd(), pathName);
};

export const fetchWithCache = async (id, req) => {
  const pathName = getCachePath(id);

  if (fileExists(pathName)) {
    const file = await readFile(pathName);
    return file;
  } else {
    // Build headers including the GitHub token if available
    const headers = {};
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }
    
    const res = await fetch(req, { headers });
    const result = await res.json();

    // Optionally, you can check here if the result is an error and handle it accordingly.
    await writeFile(pathName, result);
    return result;
  }
};

export const fetchGitHubUser = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  return await fetchWithCache(`github-users/${username}`, url);
};