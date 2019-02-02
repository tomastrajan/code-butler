import { Diff2Html } from 'diff2html';

import { diff } from '@services/git';

const CONFIG_JSON_TO_HTML = {
  inputFormat: 'json',
  outputFormat: 'side-by-side',
  showFilesOpen: true
};

export const createHtmlDiff = async (url: string, targetPath: string) => {
  const gitDiff = await diff(url, targetPath);
  const jsonDiff = Diff2Html.getJsonFromDiff(gitDiff);
  return Diff2Html.getPrettyHtml(jsonDiff, CONFIG_JSON_TO_HTML);
};

export const createHtmlDiffTemplate = (projectName, htmlDiff) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${projectName} - Code Butler</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/github.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/diff2html/2.7.0/diff2html.min.css" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/languages/javascript.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/diff2html/2.7.0/diff2html.min.js"></script>

    <script>
      $(document).ready(function() {
        const diff2htmlUi = new Diff2HtmlUI();
        diff2htmlUi.fileListCloseable("#diff", true);
        diff2htmlUi.synchronisedScroll("#diff", true);
        diff2htmlUi.highlightCode('#diff');
      });
    </script>

    <style>
      body {
        text-align: center;
        font-family: 'Source Sans Pro', sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>${projectName}</h1>
    <div id="diff">
      ${htmlDiff}
    </div>
  </body>
</html>
`;
