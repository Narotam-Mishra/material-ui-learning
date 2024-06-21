
- Material UI is a UI component library. It provides us with components to build awesome user interfaces in quick time. It is also an implementation of google's material design specification. Just like how we have Angular Material for angular and Vuetify for Vue, we have Material UI for React.

###  Material UI Important Links
- [MUI Official Documetation](https://mui.com/material-ui/getting-started/installation/)

- [MUI Customization](https://mui.com/material-ui/customization/default-theme/)

- [MUI Color palette](https://mui.com/material-ui/customization/palette/)

- [MUI Icons](https://mui.com/material-ui/icons/)

- [MUI System - Overview](https://mui.com/system/getting-started/)

- [MUI Popover component](https://mui.com/material-ui/react-popover/)

- [Mock Table data](https://mockaroo.com/)

- [MUI X](https://mui.com/blog/lab-date-pickers-to-mui-x/)

- [MUI Default Theme](https://mui.com/material-ui/customization/default-theme/)

- [Interfaces related to palette object](https://github.com/mui/material-ui/blob/v5.15.15/packages/mui-material/src/styles/createPalette.d.ts)

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
