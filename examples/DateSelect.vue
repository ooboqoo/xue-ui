<template>
  <div class="page-date-select">
    <div class="header">Date Select 日期选择框</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-date-select v-model="date1"></xue-date-select>
        <xue-date-select v-model="date2"></xue-date-select>
        <p>选中日期为：{{date1}} ~ {{date2}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { XueDateSelect } from 'xue-ui'

export default {
  components: {
    XueDateSelect,
  },
  data () {
    return {
      date1: '2018-07-14',
      date2: '2018-07-14'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-date-select {
}
</style>

