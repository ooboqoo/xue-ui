<template>
  <button class="xue-button" :class="{disabled}" @click="onClick">
    <span v-if="onloading">{{text || '加载中...'}}</span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    loading: {
      type: [Boolean, Promise],
      default: false
    },
    async: Function,
    text: String,
  },
  data () {
    return {
      onloading: false,
    }
  },
  methods: {
    onClick (event) {
      if (this.disabled) { return }
      if (this.async) {
        this.onloading = true
        this.async().finally(() => {
          this.onloading = false
        })
      }
      if (!this.onloading) {
        this.$emit('click', event)
      }
    }
  },
  watch: {
    'loading': function (val) {
      this.onloading = !!val
      if (val && val.then) {
        val.then(() => this.onloading = false).catch(() => this.onloading = false)
      }
    }
  }
}
</script>

<style lang="scss">
$blue: #0099ff;
$light-blue: #11aaff;
$gray: #6c757d;
$light-gray: #ccc;

.xue-button {
  + .xue-button {
    margin-left: 8px;
  }
  display: inline-block;
  padding: .375rem .75rem;
  min-width: 60px;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: .25rem;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  &.disabled,
  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  &.btn-primary {
    color: #fff;
    background-color: $blue;
    border-color: $blue;
    &:not(:disabled):not(.disabled):hover {
      color: #fff;
      background-color: $light-blue;
      border-color: $light-blue;
    }
  }

  &.btn-link {
    font-weight: 400;
    color: $blue;
    background-color: transparent;
  }

  &.btn-outline-primary {
    color: $blue;
    background-color: transparent;
    background-image: none;
    border-color: $blue;
    &:not(:disabled):not(.disabled):hover {
      background-color: #f3f3ff;
    }
  }

  &.btn-outline-secondary {
    color: $gray;
    background-color: transparent;
    background-image: none;
    border-color: $light-gray;
    &:not(:disabled):not(.disabled):hover {
      color: $blue;
      border-color: $blue;
    }
  }

  &.large {
    padding: .6rem 1rem;
    + .xue-button {
      margin-left: 10px;
    }
  }

  &.small {
    padding: .2rem .5rem;
    + .xue-button {
      margin-left: 5px;
    }
  }
}
</style>
