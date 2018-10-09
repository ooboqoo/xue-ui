<template>
  <div class="page-button">
    <div class="header">Button 按钮</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <xue-button class="btn-primary">btn-primary</xue-button>
        <xue-button class="btn-primary disabled">btn-primary disabled</xue-button>
        <xue-button class="btn-link">btn-link</xue-button>
        <br><br>
        <xue-button class="btn-outline-primary">btn-outline-primary</xue-button>
        <xue-button class="btn-outline-secondary">btn-outline-secondary</xue-button>

        <h4>按钮尺寸</h4>
        <xue-button class="btn-primary large">btn-primary large</xue-button>
        <xue-button class="btn-primary">btn-primary</xue-button>
        <xue-button class="btn-primary small">btn-primary small</xue-button>

        <h4>异步操作状态指示 - 用法1</h4>
        <xue-button class="btn-primary" :loading="onloading1" @click="asyncOp1">加载省</xue-button>
        <xue-button class="btn-primary" :loading="onloading2" @click="asyncOp2">加载省会</xue-button>
        {{prov}} - {{provCapital}}
        <h4>异步操作状态指示 - 用法2</h4>
        <xue-button class="btn-primary" :async="loadProv" text="提交中...">执行异步任务</xue-button>
      </div>
      <div class="markdown" v-html="markdown"></div>
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
        }).catch(err => {
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
      }).catch(err => {
        this.onloading2 = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-button {
}
</style>

