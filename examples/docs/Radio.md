
### 示例完整代码

```html
<template>
  <div class="demo">
    <h4>Vue 直接使用 input 的用法</h4>
    <label><input v-model="picked" type="radio" value="One">One</label>
    <label><input v-model="picked" type="radio" value="Two">Two</label>
    <span>Picked: {{ picked }}</span>

    <h4>使用 XueRadio 的用法</h4>
    <XueRadio v-model="selected" value="ONE">ONE</XueRadio>
    <XueRadio v-model="selected" value="TWO">TWO</XueRadio>
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