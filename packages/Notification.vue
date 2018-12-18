<template>
  <div class="xue-notification" :class="[...position.split('-'), type]">
    <svg style="position: absolute; width: 0; height: 0;">
      <defs>
        <symbol id="icon-close" viewBox="0 0 32 32">
          <path d="M5,5 L28,28 M5,28 L28,5" style="fill: none; stroke: currentColor; stroke-width: 3;"></path>
        </symbol>
      </defs>
    </svg>
    <div class="notification-header">
      <a v-if="showClose" @click="close">
        <svg class="icon-svg close"><use xlink:href="#icon-close"></use></svg>
      </a>
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="notification-content">
      <div v-if="isHtml" v-html="message"></div>
      <div v-else v-text="message"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Notification = {
  props: {
    type: {
      sype: String,
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
  methods: {
    close () {
      if (this.onClose) { this.onClose() }
      if (this._onClose) { this._onClose() }
      this.$emit('close')
    }
  },
  mounted () {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        if (!this.closed) { this.close() }
      }, this.duration)
    }
  }
}

let vm
let vms = []
let id = 1
window.vms = vms

const XueNotification = Vue.extend(Notification)

function updateVerticalOffset (position, span) {
  const list = vms.filter(vm => vm.position === position)
  const verticalProperty = position.split('-')[0]
  let verticalOffset = span
  for (let vm of list) {
    vm.$el.style[verticalProperty] = verticalOffset + 'px'
    verticalOffset += vm.$el.offsetHeight + span
  }
}

export function notify (options, slot) {
  const position = options.position || 'top-right'
  const verticalProperty = position.split('-')[0]
  let verticalOffset = 0
  const span = 6  // 通知间的间距 px
  vm = new XueNotification({
    propsData: options,
    methods: {
      _onClose () {
        for (let i = 0; i < vms.length; i++) {
          if (vms[i].id === this.id) {
            this.$el.parentNode.removeChild(this.$el)
            this.$destroy(true)
            vms.splice(i, 1)
            updateVerticalOffset(position, span)
            break
          }
        }
      }
    }
  })
  if (slot) {
    vm.$slots.default = slot
  }
  vm.id = id++
  vm.$mount()
  document.body.appendChild(vm.$el)
  vms.filter(vm => vm.position === position).forEach(vm => {
    verticalOffset += vm.$el.offsetHeight + span
  })
  vm.verticalOffset = verticalOffset + span
  vm.$el.style[verticalProperty] = verticalOffset + 'px'
  vms.push(vm)
}
</script>

<style lang="scss">
.xue-notification {
  position: fixed;
  z-index: 9999;
  width: 330px;
  padding: 6px 12px;
  transition: opacity .3s, transform .3s, left .3s, right .3s, top .4s, bottom .3s;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
  overflow: hidden;
  box-sizing: border-box;

  &.top {
    top: 16px;
  }

  &.bottom {
    bottom: 16px;
  }

  &.left {
    left: 16px;
  }

  &.right {
    right: 16px;
  }
}

.notification-header {
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  .title {
    margin: 0;
    color: #303133;
    font-size: 16px;
    font-weight: 700;
  }
}

.notification-content {
  padding: 6px 0;
}
</style>
