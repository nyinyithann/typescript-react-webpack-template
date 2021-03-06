const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.development'),
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
        host: '0.0.0.0',
        port: 2016,
        proxy: {
            '/fetch': {
                target: {
                    host: '0.0.0.0',
                    protocol: 'http:',
                    port: 5000,
                },
                pathRewrite: {
                    '^/fetch': '',
                },
            },
        },
    },
    devtool: 'inline-source-map',
};
