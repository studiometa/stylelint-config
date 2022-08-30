module.exports = {
  customSyntax: 'postcss-scss',
  extends: [require.resolve('./rules/property-order.js'), require.resolve('./rules/selector.js')],
  plugins: ['stylelint-high-performance-animation'],
  rules: {
    indentation: [2, { baseIndentLevel: 1 }],
    'plugin/no-low-performance-animation-properties': [true, { ignore: 'paint-properties' }],
    'max-line-length': 100,
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['first-nested', 'after-comment'],
        ignoreAtRules: ['return', 'warn', 'import', 'else'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
  },
};
