var path = require('path');

module.exports = {
    entry: {
        app: "./assets/scripts/app.js",
        index: "./assets/scripts/index.js",
        form: "./assets/scripts/form.js",
    },
    output: {
        path: path.resolve(__dirname, "./public/static/scripts/"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    // mode: 'development',
    mode: 'production',
};