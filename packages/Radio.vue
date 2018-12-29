<template>
  <label class="xue-radio" @click="onClick">
    <input ref="input" type="radio" :disabled="disabled" :checked="checked"
           @focus="focus=true" @blur="focus=false" @change="onChange"
    >
    <span class="xue-radio__input" :class="{checked, disabled, focus}" />
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      val: '',
      focus: false,
    }
  },
  computed: {
    checked () {
      return this.value === this.val
    }
  },
  mounted () {
    this.val = this.$el.getAttribute('value')
    this.$el.querySelector('input').setAttribute('value', this.val)
    this.$el.removeAttribute('value')
  },
  methods: {
    onChange () {
      if (this.disabled) { return }
      this.$emit('input', this.val)
      this.$emit('change', this.val)
    },
    onClick () {
      this.$refs.input.blur()
    }
  },
}
</script>

<style lang="scss">
.xue-radio > input {
  position: absolute;
  opacity: 0;
}

.xue-radio__input {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  overflow: hidden;
  border: 1px solid #999;
  border-radius: 50%;
  background: #fff;
  vertical-align: -10%;
  cursor: pointer;
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: .25em;
    height: .25em;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .15s ease-in;
    border-radius: 50%;
    background-color: #fff;
  }

  &.checked {
    border-color: #09f;
    background: #09f;

    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &.disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  &.focus {
    // sass-lint:disable no-duplicate-properties no-vendor-prefixes
    outline: 1px dotted Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
}
</style>
