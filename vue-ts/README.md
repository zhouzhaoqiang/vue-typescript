# vue-ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
npm i vue-class-component vue-property-decorator --save

// ts-loader typescript 必须安装
npm i ts-loader typescript tslint tslint-loader tslint-config-standard --save-dev

* vue-class-component：强化 Vue 组件，使用 TypeScript/装饰器 增强 Vue 组件
* vue-property-decorator：在 vue-class-component 上增强更多的结合 Vue 特性的装饰器
* ts-loader：TypeScript 为 Webpack 提供了 ts-loader，其实就是为了让webpack识别 .ts .tsx文件
* tslint-loader跟tslint：我想你也会在.ts .tsx文件 约束代码格式（作用等同于eslint）
* tslint-config-standard：tslint 配置 standard风格的约束
