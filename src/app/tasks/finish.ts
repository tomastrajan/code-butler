export const FinishTask = {
  title: 'Finish the project',
  task: async (ctx, task) => {
    const { name } = ctx.project;
    task.title = `Project "${name}" finished`;
  }
};
