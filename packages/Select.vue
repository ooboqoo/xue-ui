<template>
  <div class="xue-select">
    <input
      v-if="filter" ref="input" :placeholder="_placeholder" class="xue-select__input"
      @input="onInput"
      @compositionstart="isComposing = true" @compositionend="isComposing = false; filterOption($event)"
      @blur="onBlur" @click="toggleMenu()"
    >
    <input
      v-else ref="input" :placeholder="_placeholder" class="xue-select__input"
      :value="selected.label" @input="$event.target.value = selected.label || ''"
      @blur="onBlur" @click="toggleMenu()"
    >
    <span class="xue-select__caret" :class="{up: showMenu}">
      <svg viewBox="0 0 32 32"><path fill="none" d="M4,8 L16.5,27 L29,8" /></svg>
    </span>
    <ul v-if="showMenu" class="xue-select__lists" @mousedown="onMouseDown" @mouseup="onMouseUp">
      <li v-for="(option, idx) in filtedOptions" :key="idx"
          class="xue-select__list-item"
          :class="{selected: value === option.value, disabled: option.disabled}"
          @click="onSelectChange(option)"
      >{{ option.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number, Boolean, Object],  // any
      default: null
    },
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
      isComposing: false  // 是否正在通过输入法输入中文内容
    }
  },
  computed: {
    _placeholder () {
      return this.placeholder || (this.filter ? '可输入关键字过滤选项' : '请选择')
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
  created () {
    this.filtedOptions = this.options
    this.updateOption()
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
}
</script>

<style lang="scss">
.xue-select {
  display: inline-block;
  position: relative;
  min-width: 160px;
}

.xue-select__input {
  display: inline-block;
  width: 100%;
  height: 2em;
  padding: 0 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  background-image: none;
  color: #333;
  font-size: inherit;
  line-height: 2em;
  box-sizing: border-box;
  -webkit-appearance: none;
}

.xue-select__caret {
  position: absolute;
  top: 0;
  right: 15px;
  height: 100%;
  transition: transform .3s;
  color: #ddd;
  font-size: inherit;
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

.xue-select__lists {
  position: absolute;
  min-width: 100%;
  max-height: 274px;
  margin: 2px 0 0;
  padding: 6px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  list-style: none;
  overflow: auto;
  z-index: 999;
  box-sizing: border-box;
}

.xue-select__list-item {
  position: relative;
  height: 34px;
  padding: 0 15px;
  color: #606266;
  font-size: 14px;
  line-height: 34px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;

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
</style>
