<template>
  <div class="page-scroll-load">
    <div class="page__header">无限滚动加载组件</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <div ref="demo1">
          <h4>作为子组件监听容器滚动</h4>
          <ul><li v-for="item in list1" :key="item">{{ item }}</li></ul>
          <XueScrollLoad :listen="$refs.demo1" :load="loadList1" />
        </div>
        <XueScrollLoad :load="loadList2">
          <h4>组件作为滚动容器使用</h4>
          <ul><li v-for="item in list2" :key="item">{{ item }}</li></ul>
        </XueScrollLoad>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { XueScrollLoad } from 'xue-ui'
import markdown from './docs/ScrollLoad.md'
let index = 0

export default {
  components: {
    XueScrollLoad,
  },
  data () {
    return {
      list1: [],
      list2: [],
      markdown,
    }
  },
  created () {
    this.loadList1()
    this.loadList2()
  },
  methods: {
    loadList (whichList) {
      return new Promise(resolve => setTimeout(() => {
        this[whichList] = this[whichList].concat(Array(20).fill(0).map((it, idx) => index + idx))
        index += 20
        resolve()
      }, 2000))
    },
    loadList1 () { return this.loadList('list1') },
    loadList2 () { return this.loadList('list2') },
  },
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  height: 400px;

  > div {
    width: 400px;
    padding: 10px;
    overflow: auto;
    border: 1px solid #ccc;
  }

  > div + div {
    margin-left: 20px;
  }
}
</style>
