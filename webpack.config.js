const path = require('path');


//https://github.com/TheLarkInn/compare-webpack-target-bundles
//https://webpack.js.org/api/module-methods/
const serverConfig = {
    target: 'node',
    entry: path.resolve(__dirname, 'lib/js/app.js'),
    output: {
        filename: 'lib.node.js',
        path: path.resolve(__dirname, 'lib/js/dist/'),
        libraryTarget: 'umd'
    },
    module: {
            rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        "presets": [
                            [
                              "@babel/preset-env", {
                                "targets": {
                                  "node": "current"
                                }
                              }
                            ]
                          ]
                    },
                },
            },
        ],
    }
};


const clientConfig = {
    target: 'web',
    entry: path.resolve(__dirname, 'lib/js/app.js'),
    output: {
        filename: 'lib.js',
        path: path.resolve(__dirname, 'lib/js/dist/'),
    },
};
  
//   const clientConfig = {
//     target: 'web', // <=== can be omitted as default is 'web'
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'lib.js'
//     }
//     //…
//   };
  module.exports =  [serverConfig, clientConfig];
// module.exports = {
//     entry: path.resolve(__dirname, 'lib/js/app.js'),
//     output: {
//         filename: 'SDL.js',
//         path: path.resolve(__dirname, 'lib/js/dist/'),
//         library: 'SDL',
//         libraryTarget: 'umd',
//         umdNamedDefine: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: {
//                     loader: 'babel-loader',
//                     // options: { 
//                     //     presets: [
//                     //         '@babel/preset-env',
//                     //         {"modules": false}
//                     //     ], 
//                     // },
//                 },
//             },
//         ],
//     },
//     plugins: [
//     ],
// };
