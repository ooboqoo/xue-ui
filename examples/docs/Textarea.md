### 示例完整代码

```html
<template>
  <div class="demo">
    <XueTextarea v-model="value" maxlength="200" :placeholder="'第一行\n第二行'" />
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
