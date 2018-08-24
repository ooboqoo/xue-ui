import Vue from 'vue'
import VueRouter from 'vue-router'

import Button from './Button'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Select from './Select'
import DatePicker from './DatePicker'
import DateSelect from './DateSelect'
import DistSelect from './DistSelect'
import Rate from './Rate'
import Tabs from './Tabs'
import Dialog from './Dialog'
import Tooltip from './Tooltip'

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
    path: '/tooltip',
    component: Tooltip
  },
  {
    path: '',
    component: Readme
  },
]

const router = new VueRouter({ routes })

export default router
