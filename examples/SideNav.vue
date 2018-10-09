<template>
<div class="page-side-nav">
  <div class="logo">
    <img src="./images/xue.png">
    <span>xue-ui</span>
  </div>
  <section>
    <h3>Basic</h3>
    <ul>
      <li><router-link to="/button">Button 按钮</router-link></li>
    </ul>
  </section>
  <section>
    <h3>Form</h3>
    <ul>
      <li><router-link to="/radio">Radio 单选框</router-link></li>
      <li><router-link to="/checkbox">Checkbox 多选框</router-link></li>
      <li><router-link to="/select">Select 选择器</router-link></li>
      <li><router-link to="/textarea">Textarea 文本框</router-link></li>
      <li><router-link to="/date-picker">DatePicker 日期选择器</router-link></li>
      <li><router-link to="/date-select">DateSelect 日期选择框</router-link></li>
      <li><router-link to="/dist-select">DistSelect 省市区三级联动</router-link></li>
      <li><router-link to="/rate">Rate 评分</router-link></li>
    </ul>
  </section>
  <section>
    <h3>Navigation</h3>
    <ul>
      <li><router-link to="/tabs">Tabs 标签页</router-link></li>
    </ul>
  </section>
  <section>
    <h3>Others</h3>
    <ul>
      <li><router-link to="/dialog">Dialog 对话框</router-link></li>
      <li><router-link to="/tooltip">Tooltip 文字提示</router-link></li>
      <li><router-link to="/scroll-load">ScrollLoad 滚动加载</router-link></li>
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
  background-color: #f6f6f6;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #999;
  }

  .logo {
    margin: 20px 0;
    text-align: center;
    img {
      width: 48px;
      height: 48px;
    }
    span {
      line-height: 40px;
      font-size: 42px;
      color: #09f;
      vertical-align: top;
    }
  }

  h2 {
    text-align: center;
  }

  h3 {
    margin: 0;
    padding-left: 10px;
    font-size: 12px;
    font-weight: normal;
    color: #999;
  }

  ul {
    margin: 0;
    padding: 10px 10px 10px 20px;
    li {
      display: block;
      a {
        color: initial;
        font-size: 14px;
        text-decoration: none;
        &.router-link-exact-active {
          color: #0099ff;
        }
      }
    }
  }
}
</style>
