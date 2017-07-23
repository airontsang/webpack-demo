var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
})

const html = new HtmlWebpackPlugin({
    title: 'Output Management'
})

const clean = new CleanWebpackPlugin(['dist'])

module.exports = {
    entry: {
        app: './entry.js',
        print: './src/js/print.js'  
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        },{
            test: /\.(png|svg|jpg|gif)/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        extractSass,
        html,
        clean
    ]
};