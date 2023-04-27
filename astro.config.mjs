import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// import commonjs from "@rollup/plugin-commonjs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://wilmerHRS.github.io",
  base: "/portfolio",
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       plugins: [commonjs()],
  //     },
  //   },
  // },
});
