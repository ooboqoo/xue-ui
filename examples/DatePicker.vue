<template>
  <div class="page-date-picker">
    <div class="page__header">Date Picker 日期选择器</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueDatePicker v-model="date" />
        <p>选中日期为：{{ date }}</p>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { XueDatePicker } from 'xue-ui'
import markdown from './docs/DatePicker.md'

Vue.component('XueDatePicker', XueDatePicker)

export default {
  data () {
    return {
      markdown,
      date: '2018-07-14'
    }
  }
}
</script>
