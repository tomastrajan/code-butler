import { resolve } from 'path';

import { createProcess } from '@app/process';
import { createLogger, intro, separator } from '@services/log';

const logger = createLogger('CLI');

const config = {
  general: {
    workspace: resolve('./workspace/')
  },
  projects: [
    {
      name: '@angular-extensions/model',
      repoUrl: 'https://github.com/angular-extensions/model.git'
    },
    {
      name: 'angular-ngrx-material-starter',
      repoUrl: 'https://github.com/tomastrajan/angular-ngrx-material-starter.git'
    }
  ]
};

(async () => {
  try {
    intro();

    logger.info(`Start...`);
    separator(2);

    for (const project of config.projects) {
      await createProcess().run({
        config,
        project,
        progress: {}
      });
      separator(2);
    }

    logger.success(`Done!`);
    separator(2);
    process.exit(0);
  } catch (error) {
    logger.fatal(`Oops, something went wrong :(`);
    process.exit(1);
  }
})();
