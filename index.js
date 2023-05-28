module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    require.resolve('./rules/property-order.js'),
    require.resolve('./rules/selector.js'),
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-high-performance-animation', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'plugin/no-low-performance-animation-properties': [true, { ignore: 'paint-properties' }],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment'],
        ignore: ['after-comment', 'first-nested'],
      },
    ],
  },
};
