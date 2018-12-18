### 参数

| 参数           | 说明                                    | 类型    | 默认值
|----------------|----------------------------------------|---------|------------------
| type           | 提示类型 [注1]                         | string  | 'info'
| title          | 标题                                   | string  | —
| message        | 说明文字，支持 HTML 代码                | string   | —
| isHtml         | 说明文字是否是 HTML 代码                | boolean  | false
| duration       | 显示时间(毫秒)，设为 0 则不自动关闭      | number  | 4500
| position       | 自定义弹出位置 [注2]                    | string  | 'top-right'
| showClose      | 是否显示关闭按钮                        | boolean | true
| onClose        | 关闭时的回调函数                        | function | —
| onClick        | 点击 Notification 时的回调函数          | function | —

注1：`type` 可选项 `'success'` | `'warning'` | `'info'` | `'error'`   
注2：`position` 可选项 `'top-left'` | `'top-right'` | `'bottom-left'` | `'bottom-right'` 

### 事件

| 事件名   | 说明
|---------|----------------
| close   | 弹窗关闭时触发

### 示例完整代码

```html
<template>
  <div class="demo">
    <button @click="notify({message: '消息内容', onClose: logThis})">右上角</button>
    <button @click="notify({message: '消息内容', position: 'bottom-right'})">右下角</button>
    <button @click="notify({message: '消息内容', position: 'top-left'})">左上角</button>
    <button @click="notify({message: '消息内容', position: 'bottom-left'})">左下角</button>
    <button @click="notify({title: '标题', message: '消息内容'})">可自动关闭</button>
    <button @click="notify({message: '这条消息不会自动关闭', duration: 0})">不会自动关闭</button>

    <xue-notification v-if="showNotification" :position="'bottom-right'" :duration="0"
                      @close="showNotification = false">
      插槽用法 <button @click="logThis">打印 this</button>
    </xue-notification>
  </div>
</template>

<script>
import { XueNotification, notify } from 'xue-ui'
export default {
  components: {
    XueNotification
  },
  data () {
    return {
      showNotification: true
    }
  },
  methods: {
    notify (options) {
      notify(options)
    },
    logThis () {
      console.log(this)
    }
  }
}
</script>
```