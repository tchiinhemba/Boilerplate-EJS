const path = require('path');

module.exports = {
    mode: "production",
    entry: '',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'scripts'),
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
                test: /\.csss$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: 'source-map'
}