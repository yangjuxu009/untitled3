const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/*清理文件夹*/
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
/*打包文件夹映射路径*/
const ManifestPlugin = require('webpack-manifest-plugin');

/*复制静态文件到指定目录下*/
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {

    entry: {index:'./index.js'},
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'/*,hash:true*/
            ,
            filename: 'index.html',
            template: 'index3.html',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
        }), new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: path.resolve(__dirname),
        }),new CopyWebpackPlugin([
            {   from: path.resolve(__dirname, './src/fetchJSON'),
                to: 'fetchJSON',
                ignore: ['.*']
            }
        ])


    ],
    devtool: 'inline-source-map', /*跟踪错误信息*/
    devServer: {
        // 根目录下dist为基本目录
        contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, "fetchJSON")],
        // 自动压缩代码
        compress: true,
        // 服务端口为1208
        port: 1208,
        // 自动打开浏览器
        open: true,
        proxy: [{
            context: ['/fetchJSON/fetchAction', '/api'],
            target: 'http://localhost:8080',
        }]
    },
    output: {
        filename: '[name].bundle.js',
        /* filename: '[name].[chunkhash].js',*/
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    context: __dirname,
    module: {
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },

            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }

};
