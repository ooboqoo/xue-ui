<template>
  <div class="page-date-select">
    <div class="page__header">Date Select 日期选择框</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueDateSelect v-model="date1" />
        <XueDateSelect v-model="date2" />
        <p>选中日期为：{{ date1 }} ~ {{ date2 }}</p>
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
