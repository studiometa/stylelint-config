# StyleLint Configuration

## Usage

Install the package with your favorite package manager:

```bash
yarn add --dev @studiometa/stylelint-config
# or
npm install --save-dev @studiometa/stylelint-config
```

Create a `.stylelintrc.js` in your project's root folder with the following:

```js
module.exports = {
  extends: '@studiometa/stylelint-config',
};
```

If you want to use [Prettier](https://prettier.io/) in your project, you can use the `prettier` configuration sent in this package. Add a `.prettierrc` file at the root of your project and set the StyleLint configuration as follow:

```js
module.exports = {
  extends: '@studiometa/stylelint-config/prettier',
};
```

## TODO

- Add tests (cf. [tests](https://github.com/stylelint/stylelint-config-recommended/blob/master/__tests__/index.test.js) from recommended configuration)
