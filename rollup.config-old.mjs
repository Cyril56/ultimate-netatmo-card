import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/ultimate-netatmo-card.ts',
  output: {
    file: 'dist/ultimate-netatmo-card.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    resolve({
      browser: true,
      exportConditions: ['default', 'module', 'import']
    }),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
};




