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
        }
      ]
    },
    plugins: [
      new HtmlWepbackPlugin({
        template: './public/index.html'
      })
    ]
  };
};
