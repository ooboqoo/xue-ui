<template>
  <div class="page-tooltip">
    <div class="page__header">Tooltip 文字提示</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueButton
          v-xue-tip="'提示内容'"
          class="btn-outline-primary"
        >HOVER ME</XueButton>
        <XueButton
          v-xue-tip="'很长很长很长的提示内容，很长很长很长的提示内容，很长很长很长的提示内容'"
          class="btn-outline-primary"
        >HOVER ME</XueButton>
      </div>
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { XueTooltip, XueButton } from 'xue-ui'
import markdown from './docs/Tooltip.md'

Vue.use(XueTooltip)

export default {
  components: {
    XueButton,
  },
  data () {
    return {
      markdown,
    }
  }
}
</script>
