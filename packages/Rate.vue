<template>
  <div class="xue-rate" v-if="max > 0">
    <svg style="position: absolute; width: 0; height: 0;">
      <defs>
        <symbol id="icon-star" viewBox="0 0 32 32">
          <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
        </symbol>
      </defs>
    </svg>
    <button class="star" v-for="n in max" :key="n" :class="{hover: n <= over, filled: n <= rate}" :disabled="disabled"
            @mouseover="onMouseOver(n)" @mouseout="onMouseOut(n)" @click="setRate(n)">
      <svg class="icon">
        <use xlink:href="#icon-star"></use>
      </svg>
    </button>
    <span v-if="showText" class="view" :class="{disabled}">{{texts[over - 1]}}</span>
  </div>
</template>

<script>
export default {
  props: {
    max: {type: Number, default: 5},
    value: {type: Number, required: true},
    disabled: {type: Boolean, default: false},
    showText: {type: Boolean, default: false},
    texts: {type: Array, default: () => ['极差', '失望', '一般', '满意', '惊喜']},
  },
  data () {
    return {
      over: 0,
      rate: 0
    }
  },
  methods: {
    updateRate () {
      let value = this.value
      if (value >= this.max) { value = this.max }
      else if (value < 0) { value = 0 }
      this.rate = this.over = value
    },
    onMouseOver (n) {
      if (!this.readonly) { this.over = n }
    },
    onMouseOut () {
      if (!this.readonly) { this.over = this.rate }
    },
    setRate (n) {
      if (this.readonly) { return }
      this.$emit('input', n)
      this.$emit('change', n)
    },
  },
  watch: {
    value (val) {
      this.updateRate()
    }
  },
  created () {
    this.updateRate()
  }
}
</script>

<style lang="scss">
.xue-rate {
  .icon {
    width: 16px;
    height: 16px;
    stroke-width: 1;
    stroke: currentColor;
    fill: currentColor;
    vertical-align: middle;
  }
  .star {
    color: #b5b5b5;
    background: transparent none;
    border: 0;
    cursor: pointer;
    outline: none;
    &[disabled] {
      opacity: 0.7;
      cursor: default;
    }
    &.filled .icon,
    &.hover .icon {
      color: #efc20f;
    }
    &.filled:not(.hover) .icon{
      fill: none;
    }
  }
  .view {
    padding-left: 10px;
    vertical-align: middle;
    &.disabled {
      opacity: .7;
    }
  }
}
</style>