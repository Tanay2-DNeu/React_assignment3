const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. ENTRY: Where Webpack starts looking for your code.
  entry: './src/index.js', 

  // 2. OUTPUT: Where the bundled code goes.
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  // 3. MODULE: Rules for how to handle different file types.
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', { runtime: "automatic" }]
            ]
          }
        }
      }
    ]
  },

  // 4. PLUGINS: Extra tools.
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Use this HTML as a template
    })
  ]
};