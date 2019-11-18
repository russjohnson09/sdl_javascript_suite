// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';
// import minify from 'rollup-plugin-babel-minify';

// export default {
//   input: 'lib/js/app.js',
//   output: [
//     {
//       file: 'lib/js/dist/SDL.js',
//       format: 'umd',
//       sourcemap: 'inline',
//       name: 'SDL'
//     },
//   ],
//   plugins: [
//     resolve(),
//     babel({
//       exclude: 'node_modules/**' // only transpile our source code
//     }),
//     minify({})
//   ]
// };



//https://risanb.com/posts/bundling-your-javascript-library-with-rollup/

//rollup -c
export default {
  input: 'lib/js/app.js',
  output: [
      {
          file: 'lib/js/dist/SDL.js',
          format: 'umd',
          name: 'sdl-js'
      }]
};
