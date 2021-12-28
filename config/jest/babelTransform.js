const babelJest = require('babel-jest').default;

module.exports = babelJest.createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        // "modules": false,
        corejs: 2,
        targets: {
          chrome: '67',
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  babelrc: false,
  configFile: false,
});
