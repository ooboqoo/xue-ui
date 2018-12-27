<template>
  <div class="page-slider">
    <div class="page__header">Slider 滑块</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueSlider v-model="process1" :height="height" />
        <div style="padding: 20px 0 5px 0;">禁用拖动</div>
        <XueSlider v-model="process2" disabled />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
    <div>
      <SliderAudio />
    </div>
  </div>
</template>

<script>
import { XueSlider } from 'xue-ui'
import markdown from './docs/Slider.md'

import SliderAudio from './SliderAudio'

export default {
  components: {
    XueSlider,
    SliderAudio,
  },
  data () {
    return {
      markdown,
      process1: 20,
      process2: 30,
      height: '10px',
    }
  }
}
</script>
