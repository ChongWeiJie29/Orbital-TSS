module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__detectObjects'],
      },
    ],
  ],
};
