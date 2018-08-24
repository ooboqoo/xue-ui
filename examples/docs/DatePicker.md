### 依赖项

此组件依赖 [Day.js](https://github.com/iamkun/dayjs)， 也可使用 [Moment.js](https://github.com/moment/moment)，两者 API 是兼容的。

注：实际替换时发现，使用 Moment.js 时，对 Moment 对象进行 `add` 等操作时，会修改被操作对象，必要时需要先 `.clone()`。

### 参数

| 参数              | 说明                      | 类型                   | 默认值
|------------------|---------------------------|------------------------|---------
| value            | 具体日期                   | Date / Number / String | new Date()
| firstDayIsMonday | 一周的第一天是周一还是周日   | Boolean                | false

### 事件

| 事件名    | 说明                    | 回调参数   | 备注
|----------|-------------------------|-----------|---------
| input    | 当绑定值变化时触发的事件  | 更新后的值 | `v-model`
| change   | 当绑定值变化时触发的事件  | 更新后的值 |
| select   | 选中某个日期时           | 选中的日期 |

### 示例完整代码

```html
<template>
  <div class="demo">
    <xue-date-picker v-model="date"></xue-date-picker>
    <p>选中日期为：{{date}}</p>
  </div>
</template>

<script>
import { XueDatePicker } from 'xue-ui'
export default {
  components: {
    XueDatePicker,
  },
  data () {
    return {
      date: '2018-7-14'
    }
  }
}
</script>
```

<xue-date-picker>
</xue-date-picker>