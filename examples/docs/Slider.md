### 参数

参数      | 说明          | 类型    | 默认值
----------|--------------|---------|------------
min       | 最小值        | number  | 0 
max       | 最大值        | number  | 100
disabled  | 是否禁用拖动  | boolean | false
height    | 滑动条高度    | string  | 6px

### 示例完整代码

```html
<template>
  <div class="demo">
    <XueSlider v-model="process1" :height="height" />
    <div>禁用拖动</div>
    <XueSlider v-model="process2" disabled />
  </div>
</template>

<script>
import { XueSlider } from 'xue-ui'
export default {
  components: {
    XueSlider,
  },
  data () {
    return {
      process1: 20,
      process2: 30,
      height: '10px',
    }
  }
}
</script>
```