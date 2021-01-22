const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    console.log("==============================")
    return {
        entry: './src/main.js',
        output: {
            filename: 'lxr.bundle.js',
            path: path.resolve(__dirname, '/dist')
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            hot: true,
            port: 8080,
            inline: true,
            open: true,
            overlay: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: 'css-loader',
                },
                {
                    test: /\.less$/,
                    // use: 'less-loader'
                    use: ['style-loader', 'css-loader', 'less-loader']
                },
                {
                    test: /\.png$/,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true,
                                disable: true,
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'react app',
                filename: 'index.html',
                template: './src/index.html'
            })
        ]
    }
}
