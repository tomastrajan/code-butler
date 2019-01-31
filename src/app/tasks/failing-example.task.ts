export const FailingExampleTask = {
  title: 'Failure',
  task: () => Promise.reject(new Error('Bar'))
};
