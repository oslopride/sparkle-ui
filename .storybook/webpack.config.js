const path = require('path');
const include = path.resolve(__dirname, '../src');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
    ],
    include,
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
