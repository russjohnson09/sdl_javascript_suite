import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'lib/js/app.js',
  output: [
      {
      file: 'lib/js/dist/SDL.js',
      format: 'umd',
      sourcemap: 'inline',
      name: 'SDL'
      }],
    plugins: [
      // https://github.com/rollup/rollup-plugin-node-resolve
      // it sounds like some specific browser/node config should be set in the package for resolve to work.
      // resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      minify({})
  ]
};
