const webpack = require('webpack');
const path = require('path');

const vendors = [
    'react',
    'react-dom'
    // ...其它库
];

module.exports = {
    output: {
        path: path.join(__dirname, 'production/js'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};
