<template>
  <label class="xue-checkbox">
    <input
      type="checkbox" class="xue-checkbox__original" :disabled="disabled"
      :value="value" @input="onChange"
      @focus="focus=true" @blur="focus=false"
    >
    <svg
      class="xue-checkbox__input"
      :class="{checked: value, indeterminate, disabled, focus}" viewBox="0 0 16 16"
    >
      <path v-if="value" fill="none" d="M1.7,7.8 l3.8,3.4 l9-8.8" />
      <path v-if="indeterminate" fill="none" d="M2,8 H14" />
    </svg>
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      dafault: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focus: false,
    }
  },
  methods: {
    onChange (event) {
      this.focus = false
      if (this.disabled) { return }
      this.$emit('input', event.target.value !== 'true')  // 此时值还是原来的值，且为文本类型
      this.$emit('change', event.target.value !== 'true')
    }
  }
}
</script>

<style lang="scss">
.xue-checkbox__original {
  position: absolute;
  opacity: 0;
}

.xue-checkbox__input {
  width: 1em;
  height: 1em;
  border: 1px solid #999;
  border-radius: 4px;
  box-sizing: border-box;

  > path {
    transition: stroke-dashoffset .15s ease-in;
    opacity: 0;
    stroke: #fff;
    stroke-width: 2.3px;
    stroke-dashoffset: 20;
    stroke-dasharray: 20;
  }

  &.focus {
    // sass-lint:disable no-duplicate-properties no-vendor-prefixes
    outline: 1px dotted Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  &.checked,
  &.indeterminate {
    border-color: #09f;
    background-color: #09f;

    > path {
      opacity: 1;
      stroke-dashoffset: 0;
    }
  }
}
</style>
