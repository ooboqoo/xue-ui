<template>
  <div class="xue-textarea">
    <textarea v-model="text" :placeholder="placeholder" :maxlength="maxlength"></textarea>
    <div class="counter">{{counter}}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    maxlength: Number,
    placeholder: String
  },
  data () {
    return {
      text: '',
    }
  },
  computed: {
    counter () { return this.maxlength && this.maxlength - this.text.length }
  },
  watch: {
    text (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  },
  created () {
    if (this.value) { this.text = this.value }
  }
}
</script>

<style lang="scss">
.xue-textarea {
  position: relative;
  display: inline-block;
  font-family: inherit;
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 5px 15px;
    color: #666;
    border-color: #ccc;
  }
  .counter {
    position: absolute;
    right: 10px;
    bottom: 5px;
    color: #999;
    font-size: small;
  }
}
</style>

