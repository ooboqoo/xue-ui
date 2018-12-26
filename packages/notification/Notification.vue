<template>
  <div class="xue-notification" :class="[...position.split('-'), type]">
    <svg style="position: absolute; width: 0; height: 0;">
      <defs>
        <symbol id="icon-close" viewBox="0 0 32 32">
          <path d="M5,5 L28,28 M5,28 L28,5" style="fill: none; stroke: currentColor; stroke-width: 3;" />
        </symbol>
      </defs>
    </svg>
    <div class="xue-notification__header">
      <a v-if="showClose" @click="close">
        <svg class="icon-svg xue-notification__header-icon"><use xlink:href="#icon-close" /></svg>
      </a>
      <h2 class="xue-notification__header-title">{{ title }}</h2>
    </div>
    <div class="xue-notification__content">
      <div v-if="isHtml" v-html="message" />
      <div v-else v-text="message" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    isHtml: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 4500
    },
    position: {
      type: String,
      default: 'top-right'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function
    },
    onClick: {
      type: Function
    }
  },
  data () {
    return {
      closed: false,
    }
  },
  mounted () {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) { this.close() }
      }, this.duration)
    }
  },
  methods: {
    close () {
      if (this.onClose) { this.onClose() }
      if (this._onClose) { this._onClose() }
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.xue-notification {
  position: fixed;
  width: 330px;
  padding: 6px 12px;
  transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  overflow: hidden;
  z-index: 9999;
  box-sizing: border-box;

  &.top { top: 16px; }
  &.bottom { bottom: 16px; }
  &.left { left: 16px; }
  &.right { right: 16px; }
}

.xue-notification__header-icon {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: red;
  }
}

.xue-notification__header-title {
  margin: 0;
  color: #303133;
  font-size: 16px;
  font-weight: 700;
}

.xue-notification__content {
  padding: 6px 0;
}
</style>
