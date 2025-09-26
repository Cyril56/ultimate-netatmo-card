import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/ultimate-netatmo-card.ts", // fichier d'entrée
  output: {
    file: "dist/ultimate-netatmo-card.js", // fichier généré
    format: "es",                          // module ES
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    terser()
  ]
};
