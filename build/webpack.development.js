import webpackMerge from 'webpack-merge';
import webpackBase from './webpack.base';

export default (inEnv) => {
  return webpackMerge(webpackBase(inEnv), {
    devtool: 'source-map',
    devServer: {
      host: '0.0.0.0',
      stats: 'errors-only',
      compress: true
    }
  });
};
