/**
 * webpack的配置文件就是一个符合commonJS规范的模块
    * __dirname ： 当前文件所在的目录 F:\mydoc\kphone\class\gz_h5_2004\w5_React
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports = {
     // webpack的配置

     // 入口
     entry:'./src/main.js',

    //  出口
    // output:{

    // },

    // 测试服务器
    devServer:{
        // 配置服务器根目录
        contentBase:path.join(__dirname,'./public'),
        port:2004
    },

    // 加载器：loader
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'], // 用于把JSX编译成React.createElement()
                        // plugins:[]
                    }
                }]
            },

            // css-loader
            // sass-loader
            // less-loader
        ]
    },

    // 插件：plugins
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/index.html'),
            // filename:'home.html'
        }), // 用于生成html文件（默认为index.html）
    ]
 }