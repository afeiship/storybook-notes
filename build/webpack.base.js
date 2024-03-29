import path from 'path';
import HtmlWepbackPlugin from 'html-webpack-plugin';

export default (inEnv) => {
  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'postcss-loader'
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src')
      }
    },
    plugins: [
      new HtmlWepbackPlugin({
        template: './public/index.html'
      })
    ]
  };
};
