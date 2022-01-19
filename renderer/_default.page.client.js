import { getPage } from "vite-plugin-ssr/client";
import { createApp } from "./app";

getPage().then(context => {
  let app = createApp(context);
  window.app = app.mount("#app");
});
