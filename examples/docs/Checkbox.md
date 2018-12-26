### 使用示例

```html
<XueCheckbox v-model="box1" />
<XueCheckbox v-model="box1" :disabled="true" />
<XueCheckbox v-model="box1">选项一</XueCheckbox>
```

### 参数

| 参数      | 说明           | 类型    | 默认值   | 备注
|-----------|---------------|---------|---------|-------
| value     | 当前是否勾选   | Boolean | false   | `v-model`
| disabled  | 是否禁用复选框 | Boolean | false   |

### 事件

| 事件名    | 说明                    | 回调参数   | 备注
|----------|-------------------------|-----------|---------
| input    | 当绑定值变化时触发的事件  | 更新后的值 | `v-model`
| change   | 当绑定值变化时触发的事件  | 更新后的值 |

### 示例完整代码

```html
<template>
  <div class="demo">
    <div><span>未选中状态</span> <XueCheckbox v-model="box1" /></div>
    <div><span>选中状态</span> <XueCheckbox v-model="box2" /></div>
    <div><span>禁用状态(未选中)</span> <XueCheckbox :value="box3" :disabled="true" /></div>
    <div><span>禁用状态(选中)</span> <XueCheckbox :value="box4" :disabled="true" /></div>
    <div>
      <span>带文本</span>
      <XueCheckbox v-model="box5">选项一</XueCheckbox>
      <XueCheckbox v-model="box6">选项二</XueCheckbox>
    </div>
    <div>
      <span>未知状态(常用于全选框)</span>
      <XueCheckbox v-model="box7" :indeterminate="indeterminate">部分选中</XueCheckbox>
      <XueCheckbox v-model="box7" :indeterminate="indeterminate" :disabled="true">部分选中 + 禁用</XueCheckbox>
    </div>
  </div>
</template>

<script>
import { XueCheckbox } from 'xue-ui'
export default {
  components: {
    XueCheckbox,
  },
  data () {
    return {
      box1: false,
      box2: true,
      box3: false,
      box4: true,
      box5: false,
      box6: true,
      indeterminate: true,
    }
  },
  watch: {
    box7 () { this.indeterminate = false }
  }
}
</script>
```