export default {
  install (Vue) {
    Vue.directive('xue-tip', function (el, binding) {
      let tip
      el.addEventListener('mouseenter', () => {
        tip = document.createElement('div')
        tip.className = 'xue-tip'
        tip.innerHTML = binding.value
        if (getComputedStyle(el).position === 'static') { el.style.position = 'relative' }
        el.appendChild(tip)
        const style = getComputedStyle(tip)
        if (tip.clientWidth > parseInt(style.maxWidth)) {
          tip.style.width = style.maxWidth
          tip.style.whiteSpace = 'normal'
        }
        tip.style.top = -(tip.clientHeight + 6) + 'px'
        tip.style.left = (el.clientWidth - tip.clientWidth) / 2 + 'px'
      }, false)
      el.addEventListener('mouseleave', () => {
        el.removeChild(tip)
      }, false)
    })
  }
}
