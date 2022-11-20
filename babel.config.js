module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['inline-dotenv'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@images': './assets/images',
            '@fontAssets': './assets/fonts',
            '@lottie': './assets/lottie',
            '@colors': './app/theme/colors/',
            '@fonts': './app/theme/fonts/',
            '@consts': './app/consts/',
            '@routeNames': './app/navigation/routes/routeNames',
            '@screens': './app/screens/',
            '@components': './app/components/',
          },
        },
      ],
      ['react-native-reanimated/plugin'],
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
    ],
  };
};
