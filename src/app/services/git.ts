import execa from 'execa';
import { resolve } from 'path';

export const status = (targetPath: string) =>
  execa.stdout('git', ['status', '--porcelain'], { cwd: targetPath });

export const clone = (url: string, targetPath: string) =>
  execa.stdout('git', ['clone', url], { cwd: targetPath });

export const resetHead = (url: string, targetPath: string) => {
  return execa.stdout('git', ['reset', 'HEAD', '--hard'], {
    cwd: getProjectDirPath(targetPath, url)
  });
};

export const checkoutMaster = (url: string, targetPath: string) => {
  return execa.stdout('git', ['checkout', 'master', '--force'], {
    cwd: getProjectDirPath(targetPath, url)
  });
};

export const pull = (url: string, targetPath: string) => {
  return execa.stdout('git', ['pull'], {
    cwd: getProjectDirPath(targetPath, url)
  });
};

export const diff = (url: string, targetPath: string) => {
  const projectDirName = getProjectDirName(url);
  console.log(targetPath);
  return execa.stdout(
    'git',
    ['diff', '-M', '-C', '--no-color', projectDirName],
    {
      cwd: targetPath
    }
  );
};

const getProjectDirName = (url: string): string =>
  url
    .split('/')
    .reverse()[0]
    .replace('.git', '');

const getProjectDirPath = (targetPath: string, url: string): string =>
  resolve(targetPath, getProjectDirName(url));
