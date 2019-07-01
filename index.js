module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    require.resolve('./rules/property-order.js'),
    require.resolve('./rules/selector.js'),
  ],
  plugins: ['stylelint-high-performance-animation'],
  rules: {
    'plugin/no-low-performance-animation-properties': [
      true,
      { ignore: 'paint-properties' },
    ],
    'max-line-length': 80,
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['first-nested', 'after-comment'],
        ignoreAtRules: ['return', 'warn', 'import', 'else'],
      },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
  },
};
