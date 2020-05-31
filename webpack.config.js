const path = require('path');

module.exports = {
    target: 'node',
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "index.js"
    },
    module: {
        rules: [
            {test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    node: {
        __dirname: false,
    }
}