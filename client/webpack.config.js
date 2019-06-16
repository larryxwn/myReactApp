const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : {
        index: './client/static/js/view/main/main.js'//相对app路径
    },
    output : {
        path : __dirname + '/output/js/',//must be an absolute path
        filename : '[name].bundle.js'
    },
    module: { 
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                              "targets": {
                                "browsers": [
                                  "> 1%",
                                  "last 5 versions",
                                  "ie >= 8"
                                ]
                              }
                            }
                        ],
                        "@babel/preset-react"
                    ]
                  }
                }
              }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',//相对output中的path
            template: 'client/view/index.tpl.html'//相对app路径
        })
    ]

}