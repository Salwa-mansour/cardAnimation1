const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',

    devtool:'inline-source-map',
    devtool:'source-map',
    devServer:{
    static:{
    directory:path.resolve(__dirname,'dist')
    },
    open:true,
    hot:true,
    compress:true,
    historyApiFallback:true,
        },
    module: {
        rules: [
          {
                test:/\.scss$/i,
                use:[
                   
                  'style-loader',
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                             
                               "autoprefixer",
                                "rucksack-css",
                              
                             ],
                          },
                        },
                      },
                    'sass-loader'
                ]
            }
        ]
    },
  
 
});