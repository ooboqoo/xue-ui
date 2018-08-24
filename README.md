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
