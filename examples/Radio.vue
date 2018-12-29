<template>
  <div class="page-radio">
    <div class="page__header">Radio 单选框</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <h4>Vue 直接使用 input 的用法</h4>
        <div>
          <label><input v-model="picked" type="radio" value="One">One</label>
          <label><input v-model="picked" type="radio" value="Two">Two</label>
          <span style="padding-left:20px;">Picked: {{ picked }}</span>
        </div>

        <h4>使用 XueRadio 的用法</h4>
        <div>
          <XueRadio v-model="selected" value="ONE">ONE</XueRadio>
          <XueRadio v-model="selected" value="TWO">TWO</XueRadio>
          <span style="padding-left:20px;">选中的值为: {{ selected }}</span>
        </div>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
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
