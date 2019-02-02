import { Diff2Html } from 'diff2html';

import { diff } from '@services/git';

const CONFIG_JSON_TO_HTML = {
  inputFormat: 'json',
  outputFormat: 'side-by-side',
  showFilesOpen: true
};

export const createHtmlDiff = async (
  url: string,
  targetPath: string,
  projectName: string
) => {
  const gitDiff = await diff(url, targetPath);
  const jsonDiff = Diff2Html.getJsonFromDiff(gitDiff);
  return Diff2Html.getPrettyHtml(jsonDiff, CONFIG_JSON_TO_HTML);
};
