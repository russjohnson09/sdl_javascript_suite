const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'lib/js/app.js'),
    output: {
        filename: 'SDL.js',
        path: path.resolve(__dirname, 'lib/js/dist/'),
        library: 'SDL',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { 
                        presets: [
                            '@babel/preset-env',
                        ], 
                    },
                },
            },
        ],
    },
    plugins: [
    ],
};
