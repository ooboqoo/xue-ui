### 使用说明

该组件支持传入所有地区数据，或者逐级获取列表的方法，当然也可以都不传，那么会使用默认的地址数据。

### 参数

参数          | 说明                    | 类型
--------------|------------------------|-------------
value         | 地区编码                | [Number, String]
level         | 几级选择器，可选 1-3 级  | Number
locationData  | 全国完整的省市区数据     | Object
fetchMethod   | 逐级获取列表的方法       | Function

### 事件

事件名  | 说明
--------|---------------------------------------------
input   | 完成选择时触发，输出类型为 Number
change  | 完成选择时触发，输出类型为 String
text    | 完成选择时触发，输出编码对应的完整省市区文本信息


### 示例完整代码

```html
<template>
  <div class="demo">
    <p>省市区三级联动：</p>
    <XueDistSelect v-model="dist" style="max-width:420px;" />
    <p>只有省一级：</p>
    <XueDistSelect v-model="prov" :level="1" />
  </div>
</template>

<script>
import { XueDistSelect } from 'xue-ui'
export default {
  components: {
    XueDistSelect,
  },
  data () {
    return {
      prov: '',
      dist: 0,
    }
  },
}
</script>
```
