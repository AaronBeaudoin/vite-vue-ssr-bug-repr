import vite from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import SSRPlugin from "vite-plugin-ssr/plugin";

export default vite.defineConfig({
  plugins: [
    VuePlugin(),
    SSRPlugin()
  ]
});
