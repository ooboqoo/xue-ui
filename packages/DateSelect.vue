<template>
  <div class="xue-date-select">
    <input
      ref="input" :value="value" :placeholder="placeholder" class="xue-date-select__input"
      @click="toggleMenu()" @blur="onBlur"
    >
    <svg class="icon xue-date-select__caret"><use xlink:href="#icon-calendar" /></svg>
    <DatePicker
      v-if="showMenu" :value="value" @change="onChange"
      @mouseleave="mouseIn = false" @mouseenter="mouseIn = true"
    />
  </div>
</template>

<script>
import DatePicker from './DatePicker'

export default {
  components: {
    DatePicker,
  },
  props: {
    value: {
      type: String,
      default: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data () {
    return {
      showMenu: false,
      mouseIn: false,
    }
  },
  methods: {
    onChange (val) {
      this.mouseIn = false
      this.showMenu = false
      this.$emit('input', val)
    },
    toggleMenu () {
      this.mouseIn = false
      this.showMenu = !this.showMenu
    },
    onBlur () {
      if (!this.mouseIn) {
        this.showMenu = false
      } else {
        this.$refs.input.focus()
      }
    }
  },
}
</script>

<style lang="scss">
.xue-date-select {
  display: inline-block;
  position: relative;
  min-width: 160px;
  height: 40px;
  margin: 10px 1px;
  vertical-align: middle;

  .xue-date-picker {
    position: absolute;
    background-color: #fff;
    line-height: initial;
  }
}

.xue-date-select__input {
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
  background-image: none;
  color: #333;
  line-height: 40px;
  -webkit-appearance: none;
}

.xue-date-select__caret {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ddd;
  font-size: 1.25em;
}
</style>
