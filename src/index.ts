import { resolve } from "path";

import { process } from '@app/process';

const config = {
  general: {
    workspace: resolve('./workspace/')
  },
  project: {
    name: '@mobi/lcs-common-ng-jslib',
    repoUrl: 'https://git.mobi.mobicorp.ch/scm/lcs/lcs-common-ng-jslib.git'
  }
};

(async () => {
    try {
        await process.run({
          config,
          progress: {}
        });
    } catch (error) {
      console.error(error);
    }
})();