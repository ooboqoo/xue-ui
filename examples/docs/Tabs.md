### 示例完整代码

```html
<template>
  <div class="demo">
    <xue-tabs :links="links"></xue-tabs>
    <router-view></router-view>
  </div>
  <div class="demo">
    <xue-tabs :tabs="tabs"></xue-tabs>
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
      ],
      tabs: [
        {
          active: false, text: '课程列表', dot: false,
          click: () => { this.tabs[0].active = true; this.tabs[1].active = false }
        },
        {
          active: true, text: '查看回顾', dot: true,
          click: () => { this.tabs[0].active = false; this.tabs[1].active = true }
        }
      ]
    }
  }
}
</script>
```
