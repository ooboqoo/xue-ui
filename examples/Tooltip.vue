<template>
  <div class="page-tooltip">
    <div class="header">Tooltip 文字提示</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-button class="btn-outline-primary" v-xue-tip="'提示内容'">HOVER ME</xue-button>
        <xue-button class="btn-outline-primary" v-xue-tip="'很长很长很长的提示内容，很长很长很长的提示内容，很长很长很长的提示内容'">HOVER ME</xue-button>
      </div>
      <div class="markdown" v-html="markdown"></div>
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

<style lang="scss" scoped>
.page-tooltip {
}
</style>
