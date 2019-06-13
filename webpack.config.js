
const path = require('path');
 
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
      ],
        
        
      },
      
      devtool: 'cheap-module-eval-source-map',
      devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      },
      devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
      }
      
      
};
