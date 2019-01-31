export const InitTask = {
  title: 'Init the project',
  task: async (ctx, task) => {
    const { name } = ctx.project;
    task.title = `Project "${name}" initialized`
  }
};
