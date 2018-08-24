### 参数

参数     | 说明             | 类型                        | 默认值
---------|-----------------|-----------------------------|----------
loading  | 下拉列表选项     | [Boolean, Promise<Boolean>] | false
async    | 输入框提示文案   | Function                    | null

### 示例完整代码

```html
<template>
<div class="demo">
  <xue-button class="btn-primary">btn-primary</xue-button>
  <xue-button class="btn-primary disabled">btn-primary disabled</xue-button>
  <xue-button class="btn-link">btn-link</xue-button>
  <br><br>
  <xue-button class="btn-outline-primary">btn-outline-primary</xue-button>
  <xue-button class="btn-outline-secondary">btn-outline-secondary</xue-button>
  <h4>异步操作状态指示 - 用法1</h4>
  <!-- 外部组件自己维护状态，这样使用灵活性更高 -->
  <xue-button class="btn-primary" :loading="onloading1" @click="asyncOp1">加载省</xue-button>
  <xue-button class="btn-primary" :loading="onloading2" @click="asyncOp2">加载省会</xue-button>
  {{prov}} - {{provCapital}}
  <h4>异步操作状态指示 - 用法2</h4>
  <!-- 外部组件不用自己维护状态，直接传入一个异步方法，方便使用但不够灵活 -->
  <xue-button class="btn-primary" :async="loadProv">执行异步任务</xue-button>
</div>
</template>

<script>
import { XueButton } from 'xue-ui'
export default {
  components: {
    XueButton,
  },
  // ...
}
</script>
```