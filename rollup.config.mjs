import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/ultimate-netatmo-card.ts",
  output: {
    file: "dist/ultimate-netatmo-card.js",
    format: "es",
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" })
    // terser() supprimé, ne plus rien appeler ici
  ]
};
