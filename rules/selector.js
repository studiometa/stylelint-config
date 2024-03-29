export default {
  plugins: ['stylelint-scss'],
  rules: {
    'scss/selector-no-redundant-nesting-selector': true,
    /**
     * See https://regex101.com/r/4jSx2O/4 to test the regex,
     * matches the following:
     *
     * ```css
     * .foo {}
     * .foo.is-bar {}
     * .foo--bar {}
     * .foo__baz {}
     * .foo__baz--bar {}
     * .foo-bar {}
     * .foo-bar--foo {}
     * .foo-bar__baz {}
     * .foo-bar__baz--foo {}
     * .foo-bar__bar-foo {}
     * .foo-bar__bar-foo--baz {}
     * ```
     */
    'selector-class-pattern': [
      /^[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?(\[.+\])?$/,
      {
        resolveNestedSelectors: true,
      },
    ],
    'selector-max-compound-selectors': 3,
    /**
     * Disallow BEM nested selectors such as `&__foo` and `&--foo`.
     * See https://regex101.com/r/pU0j5e/2 to test the regex which matches, and
     * therefore allows the following nested selectors:
     *
     * ```scss
     * &.foo
     * .foo
     * .foo &
     * &:hover
     * &[foo]
     * &[foo="bar"]
     * [foo]
     * [foo="bar"]
     * [foo] &
     * [foo="bar"]
     * &:hover, &:active
     * p
     * div
     * a
     * ```
     */
    'selector-nested-pattern': /^(?!&[_-])(.+)/,
  },
};
