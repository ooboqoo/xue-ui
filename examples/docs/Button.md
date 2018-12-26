### 参数

参数     | 说明                    | 类型                        | 默认值
---------|------------------------|-----------------------------|----------
loading  | 下拉列表选项            | [Boolean, Promise<Boolean>] | false
async    | 输入框提示文案          | Function                    | null
text     | 处于加载状态时的提示文案 | String                      | '加载中...'

### 示例完整代码

```html
<template>
<div class="demo">
  <XueButton class="xue-button--primary">.xue-button--primary</XueButton>
  <XueButton class="xue-button--primary disabled">.xue-button--primary.disabled</XueButton>
  <XueButton class="xue-button--link">.xue-button--link</XueButton>
  <br><br>
  <XueButton class="xue-button--outline-primary">.xue-button--outline-primary</XueButton>
  <XueButton class="xue-button--outline-secondary">.xue-button--outline-secondary</XueButton>

  <h4>按钮尺寸</h4>
  <XueButton class="xue-button--primary xue-button--large">.xue-button--primary.xue-button--large</XueButton>
  <XueButton class="xue-button--primary">.xue-button--primary</XueButton>
  <XueButton class="xue-button--primary xue-button--small">.xue-button--primary.xue-button--small</XueButton>

  <h4>异步操作状态指示 - 用法1</h4>
  <!-- 外部组件自己维护状态，这样使用灵活性更高 -->
  <XueButton class="xue-button--primary" :loading="onloading1" @click="asyncOp1">加载省</XueButton>
  <XueButton class="xue-button--primary" :loading="onloading2" @click="asyncOp2">加载省会</XueButton>
  {{ prov }} - {{ provCapital }}
  <h4>异步操作状态指示 - 用法2</h4>
  <!-- 外部组件不用自己维护状态，直接传入一个异步方法，方便使用但不够灵活 -->
  <XueButton class="xue-button--primary" :async="loadProv" text="提交中...">执行异步任务</XueButton>
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