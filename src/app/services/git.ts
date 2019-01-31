import execa from 'execa';
import { resolve } from 'path';

export const status = (targetPath: string) =>
  execa.stdout('git', ['status', '--porcelain'], { cwd: targetPath });

export const clone = (url: string, targetPath: string) =>
  execa.stdout('git', ['clone', url], { cwd: targetPath });

export const resetHead = (url: string, targetPath: string) => {
  return execa.stdout('git', ['reset', 'HEAD', '--hard'], {
    cwd: getProjectDir(targetPath, url)
  });
};

export const checkoutMaster = (url: string, targetPath: string) => {
  return execa.stdout('git', ['checkout', 'master', '--force'], {
    cwd: getProjectDir(targetPath, url)
  });
};

export const pull = (url: string, targetPath: string) => {
  return execa.stdout('git', ['pull'], {
    cwd: getProjectDir(targetPath, url)
  });
};

const getProjectDir = (targetPath: string, url: string): string => {
  const projectPath = url
    .split('/')
    .reverse()[0]
    .replace('.git', '');
  return resolve(targetPath, projectPath);
};
