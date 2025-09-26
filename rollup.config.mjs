import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/ultimate-netatmo-card.ts",
  output: {
    file: "dist/ultimate-netatmo-card.js",
    format: "es",
    sourcemap: true,
    inlineDynamicImports: true // essentiel pour générer un bundle complet
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ]
};
