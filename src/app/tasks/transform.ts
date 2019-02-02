import globby from 'globby';
import replaceInFile from 'replace-in-file';

export const TransformTask = {
  title: 'Transform',
  task: async ctx => {
    const { workspace } = ctx.config.general;

    const paths = await globby([`${workspace}/**/*.json`]);

    const options = {
      files: paths,
      from: /name/g,
      to: 'gane',
    };

    await replaceInFile(options);
  }
};
