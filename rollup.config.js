import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/ultimate-netatmo-card.ts',
  output: {
    file: 'ultimate-netatmo-card.js',
    format: 'es'
  },
  plugins: [resolve(), typescript()]
};


