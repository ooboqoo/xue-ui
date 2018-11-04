<template>
  <div class="page-slider">
    <div class="header">Slider 滑块</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-slider v-model="process1" :height="height"></xue-slider>
        <div style="padding: 20px 0 5px 0;">禁用拖动</div>
        <xue-slider v-model="process2" disabled></xue-slider>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
    <div>
      <slider-audio></slider-audio>
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

<style lang="scss" scoped>
.page-slider {
}
</style>
