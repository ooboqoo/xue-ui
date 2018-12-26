### 特别说明

1. 这里 tooltip 的实现不是组件，是指令。使用时需要引入 tooltip.js 和 _tooltip.sass
2. 计算位置还是比较复杂的，这里只实现了最基础的功能，实际使用还是得用 [popper.js](https://github.com/FezVrasta/popper.js/)

### 示例完整代码

```html
<template>
  <div class="demo">
    <XueButton v-xue-tip="'提示内容'" class="btn-outline-primary">HOVER ME</XueButton>
    <XueButton
      v-xue-tip="'很长很长很长的提示内容，很长很长很长的提示内容，很长很长很长的提示内容'"
      class="btn-outline-primary"
    >HOVER ME</XueButton>
  </div>
</template>

<script>
import Vue from 'vue'
import { XueTooltip, XueButton } from 'xue-ui'

Vue.use(XueTooltip)

export default {
  components: {
    XueButton,
  },
}
</script>
```