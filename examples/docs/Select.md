### 参数

参数         | 说明                 | 类型    | 默认值     | 备注
-------------|---------------------|---------|-----------|--------------
options      | 下拉列表选项         | Array   | 必填项     | 条目格式 {value: String, label: String, disabled: Boolean}
placeholder  | 输入框提示文案       | String  | "请选择"   |
filter       | 是否开启过滤功能     | Boolean | false      |

### 示例完整代码

```html
<template>
  <div class="demo">
    不带过滤功能：
    <XueSelect v-model="value" :options="options" placeholder="吃点啥呢" />
    带过滤功能：
    <XueSelect v-model="value" :options="options" :filter="true" />
  </div>
</template>

<script>
import { XueSelect } from 'xue-ui'
export default {
  components: {
    XueSelect,
  },
  data () {
    return {
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
```