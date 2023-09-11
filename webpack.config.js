const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    devServer:{
        static:{
        directory:path.resolve(__dirname,'dist')
      },
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname ,'dist/assets'),
    },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                presets: ['@babel/preset-env']
                }
            }
            },{
                test:/\.scss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }

};