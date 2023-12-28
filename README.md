# SETUP

This is a react project created with create-vite. It has Jest testing and Typescript.

Here's how i set this project up. Please bear in mind that these commands are not all that I did to set the project up. I also configured the settings files, for example, `jest.config.cjs`

```bash
# using the vite template
npm create vite@latest react-ts-project -- --template react-ts
cd react-ts-project
npm i;
npm run dev

# getting some support
# the tests won't just work; look at the config files
# also, there are no tests yet - look @ the test file
npm i --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom


# prettier stuff
npm i -D prettier
npm run prettier-check
npm run prettier-format
npm install --save-dev @types/testing-library__react
npm install --save-dev identity-obj-proxy

# Git stuff
git init
git add .
git commit
git remote add origin git@github.com:candyapplecorn/more_typescript_fiddling.git
git push -u origin master
```

# React + TypeScript + Vite

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
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
