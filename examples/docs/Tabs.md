### 示例完整代码

```html
<template>
  <div class="demo">
    vue-router 链接按钮效果，active 效果由本组件自动控制
    <XueTabs :links="links" />
    <RouterView />
    <hr>
    普通的按钮效果，active 状态由使用者自己控制
    <XueTabs :tabs="tabs" />
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
