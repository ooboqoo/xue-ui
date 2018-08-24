<template>
  <div class="page-index">
    <div class="header">xue-ui</div>
    <div class="content">
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import markdown from '../README.md'

export default {
  data () {
    return {
      markdown,
    }
  },
}
</script>

<style lang="scss" scoped>
.page-readme {
}
</style>

