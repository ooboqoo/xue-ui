<template>
  <div class="xue-date-select" >
    <input :value="value" :placeholder="placeholder" ref="input"
           @click="toggleMenu()" @blur="onBlur">
    <svg class="icon"><use xlink:href="#icon-calendar"></use></svg>
    <date-picker v-if="showMenu" :value="value" @change="onChange"
                 @mouseleave="mouseIn = false" @mouseenter="mouseIn = true"></date-picker>
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
    };
  },
  methods: {
    onChange(val) {
      this.mouseIn = false
      this.showMenu = false
      this.$emit("input", val)
    },
    toggleMenu() {
      this.mouseIn = false
      this.showMenu = !this.showMenu
    },
    onBlur() {
      if (!this.mouseIn) {
        this.showMenu = false
      } else {
        this.$refs.input.focus()
      }
    }
  },
};
</script>

<style lang="scss">
.xue-date-select {
  position: relative;
  min-width: 160px;
  height: 40px;
  margin: 10px 1px;
  display: inline-block;
  vertical-align: middle;
  input {
    -webkit-appearance: none;
    outline: none;
    display: inline-block;
    padding: 0 15px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: #333;
  }
  > .icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ddd;
    font-size: 1.25em;
  }
  .xue-date-picker {
    position: absolute;
    line-height: initial;
    background-color: #fff;
  }
}
</style>