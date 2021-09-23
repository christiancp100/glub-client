module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            api: './src/api',
            hooks: './src/hooks',
            utils: './src/utils',
            navigation: './src/navigation',
            screens: './src/screens',
            context: './src/context',
            public: './public',
            root: './',
          },
        },
      ],
    ],
  }
}
