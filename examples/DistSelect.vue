<template>
  <div class="page-dist-select">
    <div class="page__header">DistSelect 省市区三级联动选择器</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <p>省市区三级联动：</p>
        <XueDistSelect v-model="dist" style="max-width: 420px;" />
        <p>只有省一级：</p>
        <XueDistSelect v-model="prov" :level="1" />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
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
