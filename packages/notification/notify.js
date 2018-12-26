import Vue from 'vue'
import XueNotification from './Notification.vue'

let vm
let vms = []
let id = 1
// window.vms = vms

const XueNotificationComp = Vue.extend(XueNotification)

function updateVerticalOffset (position, span) {
  const list = vms.filter(vm => vm.position === position)
  const verticalProperty = position.split('-')[0]
  let verticalOffset = span
  for (let vm of list) {
    vm.$el.style[verticalProperty] = verticalOffset + 'px'
    verticalOffset += vm.$el.offsetHeight + span
  }
}

export default function notify (options, slot) {
  const position = options.position || 'top-right'
  const verticalProperty = position.split('-')[0]
  let verticalOffset = 0
  const span = 6  // 通知间的间距 px
  vm = new XueNotificationComp({
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
