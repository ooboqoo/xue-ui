<template>
  <div class="page-scroll-load">
    <div class="header">无限滚动加载组件</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <div ref="demo1">
          <h4>作为子组件监听容器滚动</h4>
          <ul><li v-for="item in list1" :key="item">{{item}}</li></ul>
          <xue-scroll-load :listen="demo1El" :load="loadList1"></xue-scroll-load>
        </div>
        <xue-scroll-load :load="loadList2">
          <h4>组件作为滚动容器使用</h4>
          <ul><li v-for="item in list2" :key="item">{{item}}</li></ul>
        </xue-scroll-load>
      </div>
      <div class="markdown" v-html="markdown"></div>
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
      demo1El: null,
      list1: [],
      list2: [],
      markdown,
    }
  },
  methods: {
    loadList (whichList) {
      return new Promise(resolve => setTimeout(() => {
        this[whichList] = this[whichList].concat(Array(20).fill(0).map((it,idx) => index + idx))
        index += 20
        resolve()
      }, 2000))
    },
    loadList1 () { return this.loadList('list1') },
    loadList2 () { return this.loadList('list2') },
  },
  created () {
    this.loadList1()
    this.loadList2()
  },
  mounted() {
    this.demo1El = this.$refs.demo1
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  height: 400px;
  > div {
    width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    overflow: auto;
  }
  > div + div {
    margin-left: 20px;
  }
}
</style>


