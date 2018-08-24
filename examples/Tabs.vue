<template>
  <div class="page-tabs">
    <div class="header">Tabs 标签页</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-tabs :links="links"></xue-tabs>
        <router-view></router-view>
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
