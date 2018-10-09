### 示例完整代码

```html
<template>
  <div class="demo">
    <xue-textarea v-model="value" :maxlength="200" :placeholder="'第一行\n第二行'"></xue-textarea>
  </div>
</template>

<script>
import { XueTextarea } from 'xue-ui'

export default {
  components: {
    XueTextarea,
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
```
