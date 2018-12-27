<template>
  <div class="page-index">
    <div class="page__header">xue-ui</div>
    <div class="page__content">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown" v-html="markdown" />
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
