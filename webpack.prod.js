const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
   
    module: {
        rules: [
           {
                test:/\.scss$/i,
                use:[
                   
                    MiniCssExtractPlugin.loader,
                      
                    ,
                   
                    'css-loader',
                    {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                        plugins: [
                            
                            "autoprefixer",
                            "rucksack-css",
                           "cssnano"
                            ],
                        },
                    },
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
       
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
  
});