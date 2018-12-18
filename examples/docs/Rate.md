### 参数

| 参数      | 说明            | 类型    | 默认值
|-----------|----------------|---------|--------
| value     | 分值           | number   | 0
| max       | 最大分值        | number  | 5
| disabled  | 是否为只读      | boolean | false
| show-text	| 是否显示辅助文字 | boolean | false
| texts     | 辅助文字数组    | array   | ['极差', '失望', '一般', '满意', '惊喜']

### 事件

| 事件名称 | 说明          | 回调参数
|---------|---------------|----------------
| input   | 分值改变时触发 | 改变后的分值
| change  | 分值改变时触发 | 改变后的分值

### 示例完整代码

```html
<template>
  <div class="demo">
    <xue-rate v-model="score" :show-text="true"></xue-rate>
    <br>只读效果
    <xue-rate v-model="score2" :show-text="true" disabled></xue-rate>
  </div>
</template>

<script>
import { XueRate } from 'xue-ui'
export default {
  components: {
    XueRate,
  },
  data () {
    return {
      score: 0,
      score2: 4,
    }
  }
}
</script>
```
