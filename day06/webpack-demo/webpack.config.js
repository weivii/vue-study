const path = require('path')
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports={
    entry:'./main.js',//指定入口路径，相对路径和绝对路径都可以
    output:{
        path:path.join(__dirname,'./dist'),//指定一个出口函数，必须绝对路径，相对路径会出错
        filename:'main.js'//指定出口文件名
    },

// devserver:{
//     contentBase: path.join(__dirname, "./src"),
//     compress: true,
//     port: 3000,
//     open:true,
//     hot:true
// },
plugins:[
    new webpack.HotModuleReplacementPlugin(),//添加热更新插件
    new HtmlWebpackPlugin({//用于帮助我们自定生成HTML文件
        template:'./src/index.html',// 如果不指定template, 默认生成一个空的HTML5页面, 指定template表示从哪个HTML文件编译一个新的HTML出来
        filename:"index.html"
    }),
    new VueLoaderPlugin()

],
module:{
    rules:[
        {
            test:/\.css$/,
            use:["style-loader" , "css-loader"]
        },
        {
            test:/\.less$/,use:["style-loader","css-loader","less-loader"]//顺序是从右到左
        },
        {
            test:/\.(png|jpg|gif|jpeg|bmp|webp)$/,
            use:[
                {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                } 
            ]
        },
        {test:/\.(eot|svg|ttf|woff|woff2)$/,use:['url-loader']},
        {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
        {test:/\.vue$/,use:'vue-loader'}

    ]
},
resolve:{
    alias:{
        "vue$":"vue/dist/vue.js"
    }
},
mode:"development",
}