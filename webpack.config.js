var path =require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    mode:"development",
    entry:{
        main:"./dist/main"
    },
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //重命名提取后的文件
    plugins:[
        new ExtractTextPlugin("main.css")
    ]
};

module.exports = config;
