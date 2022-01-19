import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createApp } from "./app";

export async function render(context) {
  let app = createApp(context);
  let appHtml = dangerouslySkipEscape(await renderToString(app));

  let documentHtml = escapeInject`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>test</title>
    </head>
    <body>
      <div id="app">${appHtml}</div>
    </body>
    </html>
  `;

  return {
    documentHtml: documentHtml
  };
}

export let passToClient = [
  "props"
];
