export const escapeProjectName = (name: string) =>
  name.replace(/(\\|\/|@)/g, '-');
