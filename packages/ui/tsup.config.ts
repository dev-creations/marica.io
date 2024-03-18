import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.{tsx,ts}"],
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
  target: "es2020",
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  shims: true,
  bundle: false,
  minify: true,
  splitting: true,
  skipNodeModulesBundle: true,
  watch: false,
});
