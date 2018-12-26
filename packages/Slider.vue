<template>
  <div>
    <div ref="slider" class="xue-slider" :class="{disabled: _disabled}" :style="{height}" @click="onSliderClick">
      <div class="xue-slider__bar" :style="{width: barSize, height}" />
      <div ref="button" class="xue-slider__button" :style="buttonStyle" @mousedown="onDragStart($event)" />
    </div>
  </div>
</template>

<script>
let offsetLeft
let cursorPosition
let transition

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
  data () {
    return {
      dragging: false,
    }
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
      if (this._disabled) { return }
      const domRect = this.$refs.slider.getBoundingClientRect()
      let value = (event.clientX - domRect.left) / domRect.width * this.max
      if (value < this.min) { value = this.min }
      if (value > this.max) { value = this.max }
      this.$emit('input', value)
    },
    onDragStart (e) {
      this.dragging = true
      offsetLeft = e.target.offsetLeft
      cursorPosition = e.clientX
      transition = e.target.style.transition
      e.target.style.transition = 'none'
      document.addEventListener('mousemove', this.onDragging)
      document.addEventListener('mouseup', this.onDragEnd)
    },
    onDragging (e) {
      if (this.dragging) {
        this.$refs.button.style.left = offsetLeft + e.clientX - cursorPosition + 'px'
      }
    },
    onDragEnd (e) {
      this.dragging = false
      this.$refs.button.style.transition = transition
      this.onSliderClick(e)
      document.removeEventListener('mousemove', this.onDragging)
      document.removeEventListener('mouseup', this.onDragEnd)
    },
  }
}
</script>

<style lang="scss">
.xue-slider {
  position: relative;
  width: 100%;
  height: 6px;
  margin: 16px 0;
  border-radius: 3px;
  background-color: #e4e7ed;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;

    .xue-slider__bar {
      background-color: #e4e7ed;
    }

    .xue-slider__button {
      border-color: #e4e7ed;
    }
  }
}

.xue-slider__bar {
  position: absolute;
  width: 35%;
  height: 6px;
  transition: .2s;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #409eff;
}

.xue-slider__button {
  display: inline-block;
  position: absolute;
  width: 12px;
  height: 12px;
  margin-top: -5px;
  margin-left: -5px;
  transition: .2s;
  border: 2px solid #409eff;
  border-radius: 50%;
  background-color: #fff;
  user-select: none;

  .xue-slider:not(.disabled) & {
    cursor: grab;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
