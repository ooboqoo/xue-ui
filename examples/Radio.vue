<template>
  <div class="page-radio">
    <div class="header">Radio 单选框</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <h4>Vue 直接使用 input 的用法</h4>
        <div>
          <label><input type="radio" value="One" v-model="picked">One</label>
          <label><input type="radio" value="Two" v-model="picked">Two</label>
          <span style="padding-left:20px;">Picked: {{ picked }}</span>
        </div>

        <h4>使用 xue-radio 的用法</h4>
        <div>
          <xue-radio value="ONE" v-model="selected">ONE</xue-radio>
          <xue-radio value="TWO" v-model="selected">TWO</xue-radio>
          <span style="padding-left:20px;">选中的值为: {{ selected }}</span>
        </div>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import { XueRadio } from 'xue-ui'
import markdown from './docs/Radio.md'


export default {
  components: {
    XueRadio,
  },
  data () {
    return {
      markdown,
      selected: 'ONE',
      picked: 'One',
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

