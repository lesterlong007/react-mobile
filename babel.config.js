/**
 * @name babel.config
 * @author Lester
 * @date 2021-11-15 15:40
 */
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        forceAllTransforms: true
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = ['@babel/plugin-transform-arrow-functions', '@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins
  };
};
