<template>
  <div class="page-tabs">
    <div class="page__header">Tabs 标签页</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <p>vue-router 链接按钮效果，active 效果由本组件自动控制</p>
        <XueTabs :links="links" />
        <RouterView />
        <hr>
        <p>普通的按钮效果，active 状态由使用者自己控制</p>
        <XueTabs :tabs="tabs" />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { XueTabs } from 'xue-ui'
import markdown from './docs/Tabs.md'

export default {
  components: {
    XueTabs,
  },
  data () {
    return {
      markdown,
      links: [
        {url: '/tabs/lesson', text: '课程列表', dot: false},
        {url: '/tabs/review', text: '查看回顾', dot: true}
      ],
      tabs: [
        {
          active: false,
          text: '课程列表',
          dot: false,
          click: () => { this.tabs[0].active = true; this.tabs[1].active = false }
        },
        {
          active: true,
          text: '查看回顾',
          dot: true,
          click: () => { this.tabs[0].active = false; this.tabs[1].active = true }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-tabs {
  .demo {
    padding: 10px;
    border: 1px solid gray;
  }
}
</style>
