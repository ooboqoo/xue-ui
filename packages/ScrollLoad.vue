<template>
  <div class="xue-scroll-load" @scroll="onScroll">
    <slot v-if="!listen" />
    <slot v-if="loading" name="indicator">加载中...</slot>
  </div>
</template>

<script>
export default {
  props: {
    // 监听其他 el 元素还是监听自身的滚动事件
    listen: {
      type: Element,
    },
    load: {
      type: Function,
      required: true
    },
  },
  data () {
    return {
      loading: false,
    }
  },
  watch: {
    listen () { this.attachListener() },
  },
  mounted () {
    if (this.listen) { this.listen.attachListener() }
  },
  beforeDestroy () {
    if (this.listen) { this.listen.removeEventListener('scroll', this.onScroll) }
  },
  methods: {
    onScroll () {
      if (this.loading) { return }
      const el = this.listen || this.$el
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 50) {
        this.loading = true
        this.load()
          .then(data => { this.loading = false })
          .catch(() => { this.loading = false })
      }
    },
    attachListener () {
      if (this.listen) { this.listen.addEventListener('scroll', this.onScroll) }
    },
  },
}
</script>

<style lang="scss">
.xue-scroll-load {
  overflow: auto;
}
</style>
