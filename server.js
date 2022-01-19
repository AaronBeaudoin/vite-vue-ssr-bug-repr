let express = require("express");
let vite = require("vite");
let vitePluginSsr = require("vite-plugin-ssr");

(async config => {
  let app = express();
  
  let viteDevServer = await vite.createServer({
    server: { middlewareMode: true },
    root: config.root
  });
  
  let renderPage = vitePluginSsr.createPageRenderer({
    viteDevServer: viteDevServer,
    isProduction: config.isProduction,
    root: config.root
  });

  app.use(viteDevServer.middlewares);
  app.get("*", async (request, response, next) => {
    let context = await renderPage({ url: request.originalUrl, props: {} });
    if (!context.httpResponse) return next();

    let _ = context.httpResponse;
    response.status(_.statusCode).type(_.contentType).send(_.body);
  });

  app.listen(3000);
  console.log("Server running at http://localhost:3000...");

})({
  root: __dirname,
  isProduction: process.env.NODE_ENV === "production"
});
