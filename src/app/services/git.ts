import execa from 'execa';

import { getProjectDirName, getProjectDirPath } from '@services/util';

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
  return execa.stdout(
    'git',
    ['diff', '-M', '-C', '--no-color'],
    {
      cwd: getProjectDirPath(targetPath, url)
    }
  );
};

