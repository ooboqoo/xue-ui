<template>
  <div class="page-button">
    <div class="page__header">Button 按钮</div>
    <div class="page__content">
      <h3>示例</h3>
      <div class="demo">
        <XueButton class="xue-button--primary">.xue-button--primary</XueButton>
        <XueButton class="xue-button--primary disabled">.xue-button--primary.disabled</XueButton>
        <XueButton class="xue-button--link">.xue-button--link</XueButton>
        <br><br>
        <XueButton class="xue-button--outline-primary">.xue-button--outline-primary</XueButton>
        <XueButton class="xue-button--outline-secondary">.xue-button--outline-secondary</XueButton>

        <h4>按钮尺寸</h4>
        <XueButton class="xue-button--primary xue-button--large">.xue-button--primary.xue-button--large</XueButton>
        <XueButton class="xue-button--primary">.xue-button--primary</XueButton>
        <XueButton class="xue-button--primary xue-button--small">.xue-button--primary.xue-button--small</XueButton>

        <h4>异步操作状态指示 - 用法1</h4>
        <XueButton class="xue-button--primary" :loading="onloading1" @click="asyncOp1">加载省</XueButton>
        <XueButton class="xue-button--primary" :loading="onloading2" @click="asyncOp2">加载省会</XueButton>
        {{ prov }} - {{ provCapital }}
        <h4>异步操作状态指示 - 用法2</h4>
        <XueButton class="xue-button--primary" :async="loadProv" text="提交中...">执行异步任务</XueButton>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
    </div>
  </div>
</template>

<script>
import { XueButton } from 'xue-ui'
import markdown from './docs/Button.md'

export default {
  components: {
    XueButton,
  },
  data () {
    return {
      markdown,
      box1: false,
      box2: true,
      box3: false,
      box4: true,
      box5: false,
      box6: true,
      onloading1: false,
      onloading2: false,
      prov: '',
      provCapital: '',
    }
  },
  methods: {
    loadProv () {
      console.log(this)
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve('浙江'), 1000)
      })
    },
    loadProvCapital (prov) {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(prov + '的省会'), 1000)
      })
    },
    asyncOp1 () {
      this.onloading1 = true
      this.loadProv().then(prov => {
        this.onloading1 = false
        this.prov = prov
        this.onloading2 = true
        this.loadProvCapital(prov).then(capital => {
          this.onloading2 = false
          this.provCapital = capital
        }).catch(() => {
          this.onloading2 = false
        })
      })
    },
    asyncOp2 () {
      if (!this.prov) { return }
      this.onloading2 = true
      this.loadProvCapital(this.prov).then(capital => {
        this.onloading2 = false
        this.provCapital = capital
      }).catch(() => {
        this.onloading2 = false
      })
    },
  }
}
</script>
