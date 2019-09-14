<template>
  <button class="xue-button" :class="{disabled}" @click="onClick">
    <span v-if="onloading">{{ text || '加载中...' }}</span>
    <slot v-else />
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
  watch: {
    loading (val) {
      this.onloading = !!val
      if (val && val.then) {
        val.then(() => { this.onloading = false }).catch(() => { this.onloading = false })
      }
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
}
</script>

<style lang="scss">
$blue: #09f;
$light-blue: #1af;
$gray: #6c757d;
$light-gray: #ccc;

.xue-button {
  display: inline-block;
  min-width: 60px;
  padding: .375rem .75rem;
  border: 1px solid transparent;
  border-radius: .25rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;

  + & {
    margin-left: 8px;
  }

  &.disabled,
  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
}

.xue-button--primary {
  border-color: $blue;
  background-color: $blue;
  color: #fff;

  &:not(:disabled):not(.disabled):hover {
    border-color: $light-blue;
    background-color: $light-blue;
    color: #fff;
  }
}

.xue-button--link {
  background-color: transparent;
  color: $blue;
  font-weight: 400;
}

.xue-button--outline-primary {
  border-color: $blue;
  background-color: transparent;
  background-image: none;
  color: $blue;

  &:not(:disabled):not(.disabled):hover {
    background-color: #f3f3ff;
  }
}

.xue-button--outline-secondary {
  border-color: $light-gray;
  background-color: transparent;
  background-image: none;
  color: $gray;

  &:not(:disabled):not(.disabled):hover {
    border-color: $blue;
    color: $blue;
  }
}

.xue-button--large {
  padding: .6rem 1rem;

  + & {
    margin-left: 10px;
  }
}

.xue-button--small {
  padding: .2rem .5rem;

  + & {
    margin-left: 5px;
  }
}
</style>
