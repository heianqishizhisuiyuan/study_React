var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var autoprefixer = require('autoprefixer');
var precss = require('precss')



module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),   //主入口
    output: {
        filename: "bundle.js"                          //输出js文件名
    },

    resolve:{
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:[' ', '.js','.jsx']
    },

    module: {
        //加载器配置, 他告诉webpack 每一种文件都需要使用什么加载器来处理：
        loaders: [
            //.js 或jsx文件使用 babel-loader 来编译处理。 多个loader之间用“!”连接起来。
            {
                test: /\.(js|jsx)$/,
               // exclude: /node_modules/,
                loader: 'babel-loader',
                query: {

                    plugins: [["import", {libraryName: "antd", style: 'css'}]]
                }
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
            { test: /\.css$/,  loader: 'style-loader!css-loader!postcss-loader' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
    },

   // postcss: [autoprefixer()],//调用autoprefixer插件，例如 display: flex   不支持这样写法  必须 在plugins里面设置

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                }
            }
        }),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:3001'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })

    ],

    devServer: {
        //colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}
