<template>
  <div class="page-rate">
    <div class="page__header">Rate 评分</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueRate v-model="score" :show-text="true" />
        <div style="padding: 20px 0 5px 0;">只读效果</div>
        <XueRate v-model="score2" :show-text="true" disabled />
      </div>
      <div class="markdown" v-html="markdown" />
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
