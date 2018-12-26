<template>
  <div class="page-select">
    <div class="page__header">Select 选择器</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        不带过滤功能：
        <XueSelect v-model="value" :options="options" placeholder="吃点啥呢" />
        带过滤功能：
        <XueSelect v-model="value" :options="options" :filter="true" />
      </div>
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { XueSelect } from 'xue-ui'
import markdown from './docs/Select.md'

export default {
  components: {
    XueSelect,
  },
  data () {
    return {
      markdown,
      value: '',
      options: [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶', disabled: true},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
      ],
    }
  }
}
</script>
