export default {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    './rules/property-order.js',
    './rules/selector.js',
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
  overrides: [
    {
      files: ['*.html', '**/*.html', '*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
};
