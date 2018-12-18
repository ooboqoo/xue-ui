import Vue from 'vue'
import VueRouter from 'vue-router'

import Button from './Button'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Select from './Select'
import Textarea from './Textarea'
import DatePicker from './DatePicker'
import DateSelect from './DateSelect'
import DistSelect from './DistSelect'
import Slider from './Slider'
import Rate from './Rate'
import Tabs from './Tabs'
import Dialog from './Dialog'
import Notification from './Notification'
import Tooltip from './Tooltip'
import ScrollLoad from './ScrollLoad'

import Readme from './Readme'

Vue.use(VueRouter)

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
