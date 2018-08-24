### 示例完整代码

```html
<template>
  <div class="demo">
    <xue-tabs :links="links"></xue-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import { XueTabs } from 'xue-ui'

export default {
  components: {
    XueTabs,
  },
  data () {
    return {
      links: [
        {url: '/tabs/lesson', text: '课程列表', dot: false},
        {url: '/tabs/review', text: '查看回顾', dot: true}
      ]
    }
  }
}
</script>
```
