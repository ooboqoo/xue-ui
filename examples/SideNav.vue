<template>
  <div class="page-side-nav">
    <div class="logo">
      <img src="./images/xue.png">
      <span>xue-ui</span>
    </div>
    <section>
      <h3>Basic</h3>
      <ul>
        <li><RouterLink to="/button">Button 按钮</RouterLink></li>
      </ul>
    </section>
    <section>
      <h3>Form</h3>
      <ul>
        <li><RouterLink to="/radio">Radio 单选框</RouterLink></li>
        <li><RouterLink to="/checkbox">Checkbox 多选框</RouterLink></li>
        <li><RouterLink to="/select">Select 选择器</RouterLink></li>
        <li><RouterLink to="/textarea">Textarea 文本框</RouterLink></li>
        <li><RouterLink to="/date-picker">DatePicker 日期选择器</RouterLink></li>
        <li><RouterLink to="/date-select">DateSelect 日期选择框</RouterLink></li>
        <li><RouterLink to="/dist-select">DistSelect 省市区三级联动</RouterLink></li>
        <li><RouterLink to="/rate">Rate 评分</RouterLink></li>
        <li><RouterLink to="/slider">Slider 滑块</RouterLink></li>
      </ul>
    </section>
    <section>
      <h3>Navigation</h3>
      <ul>
        <li><RouterLink to="/tabs">Tabs 标签页</RouterLink></li>
      </ul>
    </section>
    <section>
      <h3>Others</h3>
      <ul>
        <li><RouterLink to="/dialog">Dialog 对话框</RouterLink></li>
        <li><RouterLink to="/notification">Notification 通知</RouterLink></li>
        <li><RouterLink to="/tooltip">Tooltip 文字提示</RouterLink></li>
        <li><RouterLink to="/scroll-load">ScrollLoad 滚动加载</RouterLink></li>
        <li><RouterLink to="/virtual-scroller">VirtualScroller 虚拟滚屏</RouterLink></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.page-side-nav {
  height: 100vh;
  overflow-y: auto;
  background-color: #f6f6f6;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #999;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  }

  .logo {
    margin: 20px 0;
    text-align: center;

    img {
      width: 48px;
      height: 48px;
    }

    span {
      color: #09f;
      font-size: 42px;
      line-height: 40px;
      vertical-align: top;
    }
  }

  h2 {
    text-align: center;
  }

  h3 {
    margin: 0;
    padding-left: 10px;
    color: #999;
    font-size: 12px;
    font-weight: normal;
  }

  ul {
    margin: 0;
    padding: 10px 10px 10px 20px;
  }

  li {
    display: block;
  }

  a {
    color: initial;
    font-size: 14px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #09f;
    }
  }
}
</style>
