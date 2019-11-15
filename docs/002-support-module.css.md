# support module.css

```js
  // .storybook/webpack.config.js

  config.module.rules.find(
    rule => rule.test.toString() === '/\\.css$/',
  ).exclude = /\.module\.css$/;

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      'css-modules-typescript-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  });
  
```