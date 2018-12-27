<template>
  <div class="page-dialog">
    <div class="page__header">Dialog 对话框</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueButton class="xue-button--primary" @click="openModal(false)">弹出弹框</XueButton>
        <XueButton class="xue-button--primary" @click="openModal(true)">弹出超大弹框</XueButton>
        <XueButton class="xue-button--primary" @click="openModal2">用方法弹出弹框</XueButton>
        <XueDialog :visible.sync="showModal" title="弹窗标题">
          <div v-if="showBig" class="dialog-content big">超大弹框 body</div>
          <div v-else class="dialog-content">弹框 body</div>
        </XueDialog>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { XueDialog, XueButton, openDialog } from 'xue-ui'
import markdown from './docs/Dialog.md'

export default {
  components: {
    XueDialog,
    XueButton,
  },
  data () {
    return {
      markdown,
      showModal: false,
      showBig: false,
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
      }).then(data => alert('ok: ' + data))
        .catch(err => alert('reject: ' + err))
    }
  }
}
</script>

<style lang="scss" scoped>
.page-dialog {
  .dialog-content {
    border: 1px solid red;
    padding: 20px;
    &.big {
      width: 1200px;
      height: 100vh;
    }
  }
}
</style>
