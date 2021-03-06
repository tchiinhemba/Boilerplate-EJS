const path = require('path');

module.exports = {
    mode: "production",
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "sass-loader"]
            }
        ]
    },
    devtool: 'source-map'
}