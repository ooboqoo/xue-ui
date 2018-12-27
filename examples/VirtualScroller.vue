<template>
  <div class="page-virtual-scroller">
    <div class="page__header">VirtualScroller 虚拟滚屏</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <VirtualScroller />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { VirtualScroller } from 'xue-ui'
import markdown from './docs/VirtualScroller.md'

export default {
  components: {
    VirtualScroller,
  },
  data () {
    return {
      markdown
    }
  },
}
</script>
