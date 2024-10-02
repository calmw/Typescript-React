// TODO: define const path
const path = require('path');

// TODO: module exports
module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        filename: 'bundle-ts.js',
        path: path.resolve(__dirname, 'dist'),
    },
};