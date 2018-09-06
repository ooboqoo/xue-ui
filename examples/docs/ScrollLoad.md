### 参数

| 参数      | 说明                  | 类型        | 默认值
|-----------|----------------------|-------------|--------
| listen    | 监听对象              | HTMLElement | 无
| load      | 执行具体加载行为的函数 | Function    | 必填项

### 完整示例代码

```html
<template>
  <div style="overflow: auto;">
    <h4>作为子组件监听容器滚动</h4>
    <ul><li v-for="item in list1" :key="item">{{item}}</li></ul>
    <xue-scroll-load :listen="demo1El" :load="loadList1"></xue-scroll-load>
  </div>
  <xue-scroll-load :load="loadList2">
    <h4>组件作为滚动容器使用</h4>
    <ul><li v-for="item in list2" :key="item">{{item}}</li></ul>
  </xue-scroll-load>
</template>

<script>
import { XueScrollLoad } from 'xue-ui'
let index = 0
export default {
  components: { XueScrollLoad },
  data () {
    return {
      demo1El: null,
      list1: [],
      list2: [],
    }
  },
  methods: {
    loadList (whichList) {
      return new Promise(resolve => setTimeout(() => {
        this[whichList] = this[whichList].concat(Array(20).fill(0).map((it,idx) => index + idx))
        index += 20; resolve()
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
```
