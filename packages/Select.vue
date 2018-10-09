<template>
  <div class="xue-select">
    <input v-if="filter" :placeholder="_placeholder" @blur="onBlur" ref="input"
           @click="toggleMenu()" @input="onInput" @compositionstart="isComposing = true" @compositionend="isComposing = false; filterOption($event)">
    <input v-else :value="selected.label" :placeholder="_placeholder" @blur="onBlur" ref="input"
           @click="toggleMenu()" @input="$event.target.value = selected.label || ''">
    <span class="caret" :class="{up: showMenu}">
      <svg viewBox="0 0 32 32"><path fill="none" d="M4,8 L16.5,27 L29,8"></path></svg>
    </span>
    <ul v-if="showMenu" @mousedown="onMouseDown" @mouseup="onMouseUp">
      <li v-for="(option, idx) in filtedOptions" :key="idx"
          :class="{selected: value === option.value, disabled: option.disabled}"
          @click="onSelectChange(option)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
    options: {
      type: Array,  // {value: '值', label: '显示文本'}
      required: true
    },
    placeholder: {
      type: String
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showMenu: false,
      selected: {value: undefined, label: undefined},
      withInDropdown: false,
      filtedOptions: null,
      _placeholder: '',
      isComposing: false  // 是否正在通过输入法输入中文内容
    }
  },
  watch: {
    'value': function (val) {
      this.updateOption()
      this.$refs.input.value = this.selected.label || ''
    },
    'options': function () {
      this.filtedOptions = this.options
      this.updateOption()
    },
    'selected': function () {
      if (this.filter && this.$refs.input) { this.$refs.input.value = this.selected.label || '' }
    }
  },
  methods: {
    onMouseDown () {
      this.withInDropdown = true
      setTimeout(() => {
        this.$refs.input.focus()
        this.withInDropdown = false
      }, 500)
    },
    onMouseUp () {
      this.$refs.input.focus()
      this.withInDropdown = false
    },
    onSelectChange (option) {
      if (option.disabled) { return }
      this.showMenu = false
      this.selected = option
      this.$emit('input', option.value)
      this.$emit('change', option.value)
    },
    onBlur () {
      if (!this.withInDropdown) {
        this.showMenu = false
        this.filtedOptions = this.options
        this.$refs.input.value = this.selected.label || ''
      }
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    updateOption () {
      for (let option of this.options) {
        if (this.value === option.value) {
          this.selected = option
          return
        }
      }
      this.selected = {value: undefined, label: undefined}
    },
    filterOption (event) {
      const val = event.target.value
      this.filtedOptions = this.options.filter(option => String(option.label).indexOf(val) > -1)
      if (this.filtedOptions.length > 100) {
        this.filtedOptions.length = 99
        this.filtedOptions.push({value: '', label: '选项过多，未完全显示，请添加过滤条件', disabled: true})
      }
    },
    onInput (event) {
      if (this.isComposing) { return }
      this.filterOption(event)
    }
  },
  created () {
    this._placeholder = this.placeholder
    if (!this._placeholder) { this._placeholder = this.filter ? '可输入关键字过滤选项' : '请选择' }
    this.filtedOptions = this.options
    this.updateOption()
  }
}
</script>

<style lang="scss">
.xue-select {
  position: relative;
  display: inline-block;
  min-width: 160px;
  input {
    -webkit-appearance: none;
    display: inline-block;
    padding: 0 15px;
    width: 100%;
    height: 2em;
    line-height: 2em;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: inherit;
    color: #333;
  }
  .caret {
    position: absolute;
    top: 0;
    right: 15px;
    height: 100%;
    font-size: inherit;
    color: #ddd;
    transition: transform .3s;
    pointer-events: none;
    &.up {
      transform: rotateX(180deg);
    }
    svg {
      width: 1em;
      height: 100%;
      > path {
        stroke: currentColor;
        stroke-width: 3px;
      }
    }
  }
  ul {
    position: absolute;
    max-height: 274px;
    list-style: none;
    padding: 6px 0;
    margin: 2px 0 0;
    min-width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ccc;
    overflow: auto;
    z-index: 999;
    li {
      position: relative;
      padding: 0 15px;
      font-size: 14px;
      color: #606266;
      height: 34px;
      line-height: 34px;
      white-space: nowrap;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      &.selected {
        color: #09f;
        font-weight: 600;
      }
      &.disabled {
        color: #ccc;
        cursor: not-allowed;
      }
      &:hover {
        background-color: #f5f7fa;
      }
    }
  }
}
</style>