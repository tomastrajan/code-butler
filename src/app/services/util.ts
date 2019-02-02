import { resolve } from "path";

export const escapeProjectName = (name: string) =>
  name.replace(/(\\|\/|@)/g, '-');

export const getProjectDirName = (url: string): string =>
  url
    .split('/')
    .reverse()[0]
    .replace('.git', '');

export const getProjectDirPath = (targetPath: string, url: string): string =>
  resolve(targetPath, getProjectDirName(url));

