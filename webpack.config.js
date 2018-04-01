const path = require('path');

const babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            "react",
            [
                "es2015",
                {
                    "modules": false
                }
            ],
            "es2016"
        ]
    }
};

module.exports = {
    entry: './src/index',
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx' ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'react-ts-demo.bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json')
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ babelLoader ],
            }
        ]
    }
};