# 简单的 Vue 组件库

首页：http://xue-ui.ngapps.cn  
源码：https://github.com/ooboqoo/xue-ui

## 快速开始

```bash
$ npm i         # 安装依赖
$ npm run dev   # 打开 localhost:8080 查看文档网站
```

## 目录结构

```txt
xue-ui
  |- sass           // 样式文件
  |- packages       // 实际组件定义文件
  |  |- Button.vue
  |  |- ...
  |  \- Tooltip.vue
  |- examples       // 文档网站相关内容
  |  |- docs
  |  |  |- Button.md      // 存放具体组件使用说明
  |  |  |- ...
  |  |  \- Tooltip.md
  |  |- Button.vue        // 存放具体组件示例代码，docs 目录下具体使用说明会加载到这里
  |  |- ...
  |  |- Tooltip.vue
  |  \- main.js           // 文档网站入口文件
  |- build           // webpack 构建相关文件
  \- package.json
```

## 开发原则

不追求完整性，只关注业务中碰到的功能。作为试验场所或者代码片段库存在。

除个别特别注明依赖的组件，其他组件直接拷贝组件单文件即可使用。


## 参考资料

* Element 组件库  http://element-cn.eleme.io/#/zh-CN/component/
* CSS BEM 规范用法讲解  https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/


## 代码规范相关

### ESLint & Standard & Prettier

ESLint 是 linter 不支持 format，包含 代码书写格式 和 代码质量 两种类型的规则  
Standard 是 linter 也支持 format，但仅支持 JS，不支持规则定制  
Prettier 只是 formatter，支持 HTML CSS JS 等，仅支持非常有限的规则定制

以上三者各有所长，但 Standard 与 Prettier 之间的规则有所冲突，目前项目选择方案是，使用 ESlint 对代码进行校验，
ESlint 中配置的 Standard 的规则，而 Prettier 作为辅助，仅在必要时对选择代码进行格式化(主要是看下 Prettier 选
择的代码书写规则)。目前项目中的代码除了方法名后的空格不遵循 Prettier，其他都能同时兼容 Standard 和 Prettier。

### SASS

采用 stylelint 对 CSS SCSS 进行错误和代码质量检查  
VSCode 安装完插件 Vetur 就支持 Vue 单文件内的 `<style lang="scss">` 的 lint  

### JS 类型检查

项目中添加了 _jsconfig.json_，会利用 VSCode 自带的 TypeScript 对 JS 代码进行语义校验。
