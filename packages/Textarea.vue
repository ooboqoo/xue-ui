<template>
  <div class="xue-textarea">
    <textarea v-model="text" class="xue-textarea__input" :placeholder="placeholder" :maxlength="maxlength" />
    <div class="xue-textarea__counter">{{ counter }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    maxlength: [Number, String],
    placeholder: String,
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
    },
    value (val) { this.text = this.value }
  },
  created () {
    if (this.value) { this.text = this.value }
  }
}
</script>

<style lang="scss">
.xue-textarea {
  display: inline-block;
  position: relative;
  font-family: inherit;
}

.xue-textarea__input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 5px 15px;
  border-color: #ccc;
  color: #666;
}

.xue-textarea__counter {
  position: absolute;
  right: 10px;
  bottom: 5px;
  color: #999;
  font-size: small;
}
</style>
