const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.jsx',
    output:{
        // 编译后文件保存的目录
        path:path.resolve('./dist'),
        filename:'js/[name]-[hash:5]-bundle.js',
        publicPath:'/public'
    },
    devServer:{
        host:'0.0.0.0',
        contentBase: path.join(__dirname,'./public'),
        port:2004
    },

    resolve:{
        // 路径别名
        alias:{
            '@':path.resolve('./src'),
            '~':path.resolve('./src/views')
        },
        // 默认扩展名
        extensions:['.js','.jsx']
    },

    module:{
        rules:[
            // js加载器
            {
                test:/\.jsx?$/, // .js,.jsx
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-react'], // 插件集合
                            plugins:[
                                ['@babel/plugin-proposal-decorators',{legacy: true}],
                                ['@babel/plugin-proposal-class-properties',{loose:true}],
                               
                                // antd按需加载
                                ["import", { libraryName: "antd", style: "css" },'antd'],
                                ["import", { libraryName: "antd-mobile", style: "css" },'antdm'] 
                            ]
                        }
                    }
                ]
            },

            // css loader:css-loader + style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass: sass-loader
            // sass->css->style
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./public/index.html'),
            // filename:'home.html'
        }), // 用于生成html文件（默认为index.html）
    ]
}