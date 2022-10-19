## Features

- 🎒 Vue 3
- 🚀 Vite
- 🚇 pinia
- 🐟 TypeScript

## Install

Using `npm` to install:

```bash
# install latest Vant for Vue 3 project
npm install selleri-ui
```

Using `yarn` or `pnpm`:

```bash
# with yarn
yarn add guld-ui

# with pnpm
pnpm add guld-ui
```

## Quickstart

```js
import Guld from 'guld-ui'
import 'guld-ui/dist/style.css'
import { createApp } from 'vue';
const app = createApp(App)
app.use(Guld)

// use
<g-button class="button">button</g-button>

```

## Usage

属性名 | 类型 | 可选值 | 默认值 | 描述
:---: | :---: | :---: | :---:| :---:
size | string | small,normal,large | normal | 控制button大小
loading | boolean | false,true | false | 显示按钮是否处于loading状态
circle | boolean | false,true | false | 是否为圆形
type | string | primary,success,error,info | info | 按钮的类型，也就是实际上的颜色
disabled | boolean | false,true | false | 按钮的点击状态
long | boolean | false,true | false | 横向填充满