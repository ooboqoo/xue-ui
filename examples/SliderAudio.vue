<template>
  <div class="page-slider">
    <div class="page__header" style="margin-top: 30px;">Audio 应用示例</div>
    <div class="page__content">
      <div class="control">
        <div class="control-bar">
          <div class="button" @click="play">{{ currentAudio && currentAudio.status === 2 ? '停' : '播' }}</div>
          <div class="slider">
            <XueSlider
              :max="currentAudio && currentAudio.duration"
              :disabled="!currentAudio || currentAudio.status === 0"
              :value="currentTime" @input="seek"
            />
          </div>
          <div class="duration">{{ duration }}</div>
        </div>
        <div class="audio-list">
          <div
            v-for="(audio, index) of audios" :key="audio.dom.src"
            class="audio-item" :class="{active: audio === currentAudio}"
            @click="selectAudio(audio)"
          >
            <span>音频 {{ +index + 1 }}</span>
            <span v-if="audio === currentAudio">{{ ['加载中', '当前暂停', '正在播放'][audio.status] }}</span>
          </div>
        </div>
      </div>
      <div class="article">
        <span>原生组件</span>
        <audio src="https://tikufile.haibian.com/english/66910546-bf8e-4495-a3c8-308d7e1c32e0.mp3" controls />
        <audio src="https://tikufile.haibian.com/english/1ff16150-0957-4b8d-a4d5-fb42a719c6c2.mp3" controls />
      </div>
    </div>
  </div>
</template>

<script>
import { XueSlider } from 'xue-ui'

function formatDuration (duration) {
  const h = Math.floor(duration / 3600)
  const m = Math.floor((duration - 3600 * h) / 60)
  const s = Math.round(duration % 60)
  const mm = (m >= 10 ? '' : '0') + m
  const ss = (s >= 10 ? '' : '0') + s
  if (h === 0) {
    return m + ':' + ss
  } else {
    return h + ':' + mm + ':' + ss
  }
}

export default {
  components: {
    XueSlider,
  },
  data () {
    return {
      audios: [],
      currentAudio: null,
      currentTime: 0
    }
  },
  computed: {
    duration () {
      return formatDuration((this.currentAudio && this.currentAudio.duration) || 0)
    }
  },
  mounted () {
    const audios = this.$el.querySelectorAll('audio')
    this.audios.length = 0
    for (let audio of audios) {
      audio.setAttribute('preload', 'auto')
      this.audios.push({
        status: 0,
        duration: audio.duration,
        dom: audio
      })
    }
    this.selectAudio(this.audios[0])
  },
  beforeDestroy () {
    this.currentAudio.dom.ontimeupdate = null
    this.currentAudio.dom.onended = null
    this.currentAudio.dom.oncanplaythrough = null
  },
  methods: {
    selectAudio (audio) {
      if (this.currentAudio) {
        this.currentAudio.dom.onended = null
        this.currentAudio.dom.ontimeupdate = null
        this.currentAudio.dom.pause()
      }
      this.updateInfo(audio)
      audio.dom.ontimeupdate = () => {
        this.currentTime = this.currentAudio.dom.currentTime
      }
      this.currentAudio = audio
      this.currentTime = audio.dom.currentTime
    },
    updateInfo (audio) {
      audio.duration = audio.dom.duration
      if (audio.dom.readyState < 4) {
        audio.status = 0
        audio.dom.oncanplaythrough = () => {
          audio.status = audio.dom.paused ? 1 : 2
          audio.duration = audio.dom.duration
          audio.dom.oncanplaythrough = null
        }
      } else if (audio.dom.paused) {
        audio.status = 1
      } else {
        audio.status = 2
      }
    },
    play () {
      const current = this.currentAudio
      const dom = this.currentAudio.dom
      if (dom.paused) {
        dom.play()
        current.status = 2
        dom.onended = () => {
          current.status = 1
          dom.onended = null
        }
      } else {
        dom.pause()
        current.status = 1
      }
      this.updateInfo(current)
    },
    seek (value) {
      this.currentTime = value
      this.currentAudio.dom.currentTime = value
    }
  },
}
</script>

<style lang="scss" scoped>
.page-slider {
  .content {
    display: flex;
  }
  .control {
    width: 240px;
    border: 1px solid #ccc;
    border-radius: 4px;
    .control-bar {
      display: flex;
      align-items: center;
      height: 42px;
      padding: 0 10px;
      border-bottom: 2px solid #eee;
      .button {
        margin: 0 4px;
        width: 24px;
        height: 24px;
        background-color: #4ba6f9;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
      .slider {
        flex-grow: 1;
        margin: 0 15px;
      }
    }
    .audio-item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      &.active {
        color: #4e86f6;
      }
      &.active, &:hover {
        background-color: #f4f4f4;
      }
    }
  }
  .article {
    width: 320px;
    margin: 0 20px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
  }
}
</style>
