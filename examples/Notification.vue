<template>
  <div class="page-notification">
    <div class="page__header">Notification 通知</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <button @click="notify({message: '消息内容', onClose: logThis})">右上角</button>
        <button @click="notify({message: '消息内容', position: 'bottom-right'})">右下角</button>
        <button @click="notify({message: '消息内容', position: 'top-left'})">左上角</button>
        <button @click="notify({message: '消息内容', position: 'bottom-left'})">左下角</button>
        <button @click="notify({title: '标题', message: '消息内容'})">可自动关闭</button>
        <button @click="notify({message: '这条消息不会自动关闭', duration: 0})">不会自动关闭</button>
        <XueNotification
          v-if="showNotification" :position="'bottom-right'" :duration="0"
          @close="showNotification = false"
        >
          插槽用法 <button @click="logThis">打印 this</button>
        </XueNotification>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { XueNotification, notify } from 'xue-ui'
import markdown from './docs/Notification.md'

export default {
  components: {
    XueNotification,
  },
  data () {
    return {
      markdown,
      showNotification: true,
    }
  },
  methods: {
    notify (options) {
      notify(options)
    },
    logThis () {
      console.log(this)
    },
  }
}
</script>
