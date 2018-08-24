<template>
  <button class="xue-button" @click="onClick">
    <span v-if="onloading">加载中...</span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: [Boolean, Promise],
      default: false
    },
    async: Function
  },
  data () {
    return {
      onloading: false,
    }
  },
  methods: {
    onClick (event) {
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

.xue-button {
  + .xue-button {
    margin-left: 5px;
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

  &.disabled,
  &:disabled {
    opacity: .5;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
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
  }

  &.btn-outline-secondary {
    color: $gray;
    background-color: transparent;
    background-image: none;
    border-color: $gray;
  }
}
</style>
