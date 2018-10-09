<template>
  <div class="page-radio">
    <div class="header">Textarea 文本框</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-textarea v-model="value" maxlength="200" :placeholder="'第一行\n第二行'"></xue-textarea>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import { XueTextarea } from 'xue-ui'
import markdown from './docs/Textarea.md'

export default {
  components: {
    XueTextarea,
  },
  data () {
    return {
      markdown,
      value: '',
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

