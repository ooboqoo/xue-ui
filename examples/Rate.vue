<template>
  <div class="page-rate">
    <div class="header">Rate 评分</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-rate v-model="score" :show-text="true"></xue-rate>
        <div style="padding: 20px 0 5px 0;">只读效果</div>
        <xue-rate v-model="score2" :show-text="true" disabled></xue-rate>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import { XueRate } from 'xue-ui'
import markdown from './docs/Rate.md'

export default {
  components: {
    XueRate,
  },
  data () {
    return {
      markdown,
      score: 0,
      score2: 4,
    }
  }
}
</script>

<style lang="scss" scoped>
.page-rate {
}
</style>
