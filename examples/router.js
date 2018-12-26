import Vue from 'vue'
import VueRouter from 'vue-router'

import Button from './Button.vue'
import Radio from './Radio.vue'
import Checkbox from './Checkbox.vue'
import Select from './Select.vue'
import Textarea from './Textarea.vue'
import DatePicker from './DatePicker.vue'
import DateSelect from './DateSelect.vue'
import DistSelect from './DistSelect.vue'
import Slider from './Slider.vue'
import Rate from './Rate.vue'
import Tabs from './Tabs.vue'
import Dialog from './Dialog.vue'
import Notification from './Notification.vue'
import Tooltip from './Tooltip.vue'
import ScrollLoad from './ScrollLoad.vue'

import Readme from './Readme.vue'

Vue.use(VueRouter)

// 支持组件中 PascalCase 写法，等 vue-router 更新后再去掉此部分代码
Vue.component('RouterView', Vue.component('router-view'))
Vue.component('RouterLink', Vue.component('router-link'))

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/select',
    component: Select
  },
  {
    path: '/textarea',
    component: Textarea
  },
  {
    path: '/date-picker',
    component: DatePicker
  },
  {
    path: '/date-select',
    component: DateSelect
  },
  {
    path: '/dist-select',
    component: DistSelect
  },
  {
    path: '/rate',
    component: Rate
  },
  {
    path: '/slider',
    component: Slider
  },
  {
    path: '/tabs',
    component: Tabs,
    redirect: '/tabs/lesson',
    children: [
      {path: 'lesson', component: {template: '<p>课程列表内容</p>'}},
      {path: 'review', component: {template: '<p>课程回顾内容</p>'}},
    ]
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/notification',
    component: Notification
  },
  {
    path: '/tooltip',
    component: Tooltip
  },
  {
    path: '/scroll-load',
    component: ScrollLoad
  },
  {
    path: '',
    component: Readme
  },
]

const router = new VueRouter({ routes })

export default router
