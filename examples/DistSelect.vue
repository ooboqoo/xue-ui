<template>
  <div class="page-dist-select">
    <div class="header">DistSelect 省市区三级联动选择器</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <p>省市区三级联动：</p>
        <xue-dist-select v-model="dist" style="max-width:420px;"></xue-dist-select>
        <p>只有省一级：</p>
        <xue-dist-select :level="1" v-model="prov"></xue-dist-select>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import { XueDistSelect } from 'xue-ui'
import markdown from './docs/DistSelect.md'

export default {
  components: {
    XueDistSelect,
  },
  data () {
    return {
      markdown,
      prov: '',
      dist: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-dist-select {
}
</style>


