### 参数

| 参数           | 说明                                    | 类型    | 默认值
|----------------|----------------------------------------|---------|------------------
| visible        | 是否显示 Dialog，支持 .sync 修饰符       | Boolean | false
| title          | 标题，也可通过具名 slot 指定             | String  | —
| modal          | 是否需要遮罩层                          | Boolean | true
| show-close     | 是否显示关闭按钮                        | Boolean | true
| before-close   | 关闭前的回调，会暂停 Dialog 的关闭 [注]  | Function | —

注：function(done)，done 用于关闭 Dialog

### 插槽

| 插槽名   | 说明
|---------|----------------
| —       | 主体弹窗内容
| title   | 标题区内容
| footer  | 按钮操作区内容

### 事件

| 事件名   | 说明
|---------|----------------
| close   | 弹窗关闭时触发
| cancel  | 点击取消按钮时触发
| confirm | 点击确认按钮时触发

### openDialog

```ts
function openDialog({ options, slots, slotData, callback }: {
  options: any;
  slots: any;
  slotData?: { [x: string]: any; };
  callback?: vm => void;
}): Promise<any>
```

### 示例完整代码

```html
<template>
  <div class="demo">
    <XueButton class="xue-button--primary" @click="openModal(false)">弹出弹框</XueButton>
    <XueButton class="xue-button--primary" @click="openModal(true)">弹出超大弹框</XueButton>
    <XueButton class="xue-button--primary" @click="openModal2">用方法弹出弹框</XueButton>
    <XueDialog :visible.sync="showModal" title="弹窗标题">
      <div v-if="showBig" class="dialog-content big">超大弹框 body</div>
      <div v-else class="dialog-content">弹框 body</div>
    </XueDialog>
  </div>
</template>

<script>
import { XueDialog, XueButton, openDialog } from 'xue-ui'
export default {
  components: {
    XueDialog,
    XueButton,
  },
  data () {
    return {
      showModal: false,
      showBig: false
    }
  },
  methods: {
    openModal (showBig) {
      this.showModal = true
      this.showBig = showBig
    },
    openModal2 () {
      openDialog({
        options: {
          propsData: {
            title: '通过方法生成弹窗',
          }
        },
        slots: {
          default: '<div style="border: 1px solid red;">{{text}}</div>',
        },
        slotData: {
          text: 'body here',
        }
      })
      .then(data => alert('ok: ' + data))
      .catch(err => alert('reject: ' + err))
    }
  }
}
</script>
```
