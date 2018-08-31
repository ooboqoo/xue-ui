<template>
  <div class="page-tabs">
    <div class="header">Tabs 标签页</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <p>vue-router 链接按钮效果，active 效果由本组件自动控制</p>
        <xue-tabs :links="links"></xue-tabs>
        <router-view></router-view>
        <hr>
        <p>普通的按钮效果，active 状态由使用者自己控制</p>
        <xue-tabs :tabs="tabs"></xue-tabs>
      </div>
      <div class="markdown" v-html="markdown"></div>
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

<style lang="scss" scoped>
.page-tabs {
  .demo {
    border: 1px solid gray;
    padding: 10px;
  }
}
</style>
