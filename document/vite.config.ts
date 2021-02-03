import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["monaco-editor", "aoife"],
  },
  esbuild: {
    jsxFactory: "aoife",
    jsxFragment: "aoife.Frag",
  },
});
