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

### Button
#### 属性
属性名 | 类型 | 可选值 | 默认值 | 描述
:---: | :---: | :---: | :---:| :---:
size | string | small,normal,large | normal | 控制button大小
loading | boolean | false,true | false | 显示按钮是否处于loading状态
round | boolean | false,true | false | 是否为圆角
type | string | primary,success,error,info | info | 按钮的类型，也就是实际上的颜色
disabled | boolean | false,true | false | 按钮的点击状态
long | boolean | false,true | false | 横向填充满

### Input
#### 属性
属性名 | 类型 | 可选值 | 默认值 | 描述
:---: | :---: | :---: | :---:| :---:
type | string | 原生input所有type值（除了textarea） | password | 类型
placeholder | string | - | - | 输入占位文本
disabled | boolean | true,false | false | 是否禁用

#### input事件
事件名 | 说明 | 参数
:---: | :---: | :---:
change | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | (value: string | number)
input | 在 Input 值改变时触发 | (value: string | number)