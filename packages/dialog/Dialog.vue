<template>
  <div v-if="visible" class="xue-dialog">
    <svg style="position: absolute; width: 0; height: 0;">
      <defs>
        <symbol id="icon-close" viewBox="0 0 32 32">
          <path d="M5,5 L28,28 M5,28 L28,5" style="stroke-width: 3; stroke: currentColor; fill: none;" />
        </symbol>
      </defs>
    </svg>
    <div v-if="modal" class="xue-dialog__mask" />
    <div ref="wrapper" class="xue-dialog__wrapper">
      <div class="xue-dialog__header">
        <a v-if="showClose" @click="close">
          <svg class="icon-svg icon-close"><use xlink:href="#icon-close" /></svg>
        </a>
        <slot name="header">
          <div class="dialog-header">{{ title }}</div>
        </slot>
      </div>
      <div class="xue-dialog__body">
        <slot />
      </div>
      <div class="xue-dialog__footer">
        <slot name="footer">
          <XueButton class="xue-button--outline-primary" @click="cancel">取消</XueButton>
          <XueButton class="xue-button--primary" @click="confirm">确认</XueButton>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import XueButton from '../Button.vue'

export default {
  components: {
    XueButton,
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    modal: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    beforeClose: Function
  },
  methods: {
    close () {
      if (this.beforeClose) {
        new Promise((resolve, reject) => {
          this.beforeClose(resolve)
        }).then(() => {
          this.$emit('update:visible', false)
          this.$emit('close')
        })
      } else {
        this.$emit('update:visible', false)
        this.$emit('close')
      }
    },
    cancel () {
      this.$emit('cancel')
      this.close()
    },
    confirm () {
      this.$emit('confirm')
      this.close()
    }
  }
}
</script>

<style lang="scss">
.xue-dialog__mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}

.xue-dialog__wrapper {
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  max-height: 98vh;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

.xue-dialog__header {
  padding: 5px 10px;

  .icon-close {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #ccc;
    font-size: 1.25em;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
}

.xue-dialog__body {
  min-width: 200px;
  max-width: 95vw;
  min-height: 60px;
  max-height: calc(98vh - 100px);
  overflow: auto;
}

.xue-dialog__footer {
  padding: 15px;
  text-align: right;
}
</style>
