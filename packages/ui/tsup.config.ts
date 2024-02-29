import { defineConfig } from "tsup";

export default defineConfig({
  // entryPoints: ['src/index.ts'],
  entry: ["src/**/*.{tsx,ts}"],
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
  target: "es2020",
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  shims: true,
  bundle: true,
  minify: true,
  splitting: true,
  skipNodeModulesBundle: true,
  watch: process.env.NODE_ENV === "development",
});
