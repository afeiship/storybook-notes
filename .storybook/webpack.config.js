const path = require('path');

module.exports = async ({ config, mode }) => {
  config.devtool = 'source-map';
  config.resolve.alias['@'] = path.resolve(__dirname, '../src');
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
