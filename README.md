## Features

- 🎒 Vue 3 
- 🚀 Vite
- 🚇 pinia
- 🐟 TypeScript

## install

Using `npm` to install:

```bash
# install latest Vant for Vue 3 project
npm install selleri-ui
```

Using `yarn` or `pnpm`:

```bash
# with yarn
yarn add rafi-ui

# with pnpm
pnpm add rafi-ui
```

## Quickstart

```js
import { createApp } from 'vue';
// 1. Import the components you need
import { button } from 'rafi-ui';
// 2. Import the components style
import 'rafi-ui/dist/style.css';

const app = createApp();

// 3. Register the components you need
app.use(button);
```
