<template>
  <div class="xue-slider">
    <div class="runway" :class="{disabled: _disabled}" :style="{height}"
         ref="slider" @click="onSliderClick">
      <div class="bar" :style="{width: barSize, height}"></div>
      <div class="button" :style="buttonStyle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
    },
  },
  computed: {
    _disabled () {
      return !!this.disabled || this.disabled === ''
    },
    barSize () {
      return (this.value - this.min) / (this.max - this.min) * 100 + '%'
    },
    buttonStyle () {
      const height = parseInt(this.height)
      return !this.height ? {left: this.barSize} : {
        left: this.barSize,
        width: height * 2 + 'px',
        height: height * 2 + 'px',
        marginLeft: -height + 'px',
        marginTop: -height * 0.5 - 2 + 'px',
      }
    }
  },
  methods: {
    onSliderClick (event) {
      if (this._disabled || this.dragging) { return }
      const domRect = this.$refs.slider.getBoundingClientRect()
      let value = (event.clientX - domRect.left) / domRect.width * this.max
      if (value < this.min) { value = this.min }
      if (value > this.max) { value = this.max }
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
.xue-slider {
  .runway {
    position: relative;
    margin: 16px 0;
    width: 100%;
    height: 6px;
    background-color: #e4e7ed;
    border-radius: 3px;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
      .bar {
        background-color: #e4e7ed;
      }
      .button {
        border-color: #e4e7ed;
      }
    }

    .bar {
      position: absolute;
      width: 35%;
      height: 6px;
      background-color: #409eff;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      transition: .2s;
    }

    .button {
      display: inline-block;
      position: absolute;
      margin-top: -5px;
      margin-left: -5px;
      width: 12px;
      height: 12px;
      border: 2px solid #409eff;
      background-color: #fff;
      border-radius: 50%;
      transition: .2s;
      user-select: none;
    }
  }
}
</style>
