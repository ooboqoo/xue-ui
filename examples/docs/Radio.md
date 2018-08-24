
### 示例完整代码

```html
<template>
  <div class="demo">
    <h4>Vue 直接使用 input 的用法</h4>
    <label><input type="radio" value="One" v-model="picked">One</label>   
    <label><input type="radio" value="Two" v-model="picked">Two</label>
    <span>Picked: {{ picked }}</span>

    <h4>使用 xue-radio 的用法</h4>
    <xue-radio value="ONE" v-model="selected">ONE</xue-radio>
    <xue-radio value="TWO" v-model="selected">TWO</xue-radio>
    <span>选中的值为: {{ selected }}</span>
  </div>
</template>

<script>
import { XueRadio } from 'xue-ui'
export default {
  components: {
    XueRadio,
  },
  data () {
    return {
      picked: 'One',
      selected: 'ONE',
    }
  }
}
</script>
```