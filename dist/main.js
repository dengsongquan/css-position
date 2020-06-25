var path = require('path')

var config = {
    mode: "development",
    entry: {
        main: "./main"
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    }
};

module.exports = config;
