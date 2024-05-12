import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.{tsx,ts}"],
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
  target: "es2020",
  dts: true,
  clean: true,
  sourcemap: false,
  treeshake: true,
  shims: false,
  bundle: false,
  minify: true,
  splitting: false,
  skipNodeModulesBundle: true,
  watch: false,
});
