<template>
  <div class="page-date-picker">
    <div class="header">Date Picker 日期选择器</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-date-picker v-model="date"></xue-date-picker>
        <p>选中日期为：{{date}}</p>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { XueDatePicker } from 'xue-ui'
import markdown from './docs/DatePicker.md'

Vue.component('xue-date-picker', XueDatePicker)

export default {
  data () {
    return {
      markdown,
      date: '2018-07-14'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-date-picker {
}
</style>

