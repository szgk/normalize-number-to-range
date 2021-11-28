module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
          'modules': 'umd',
          'useBuiltIns': 'usage',
          'targets': '> 0.25%, not dead',
          'corejs': 3,
      },
    ]
  ],
};