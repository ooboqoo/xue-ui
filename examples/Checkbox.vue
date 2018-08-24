<template>
  <div class="page-checkbox">
    <div class="header">Checkbox 多选框</div>
    <div class="content">
      <h3>示例</h3>
      <div class="demo">
        <div><span>未选中状态</span> <xue-checkbox v-model="box1"></xue-checkbox></div>
        <div><span>选中状态</span> <xue-checkbox v-model="box2"></xue-checkbox></div>
        <div><span>禁用状态(未选中)</span> <xue-checkbox :value="box3" :disabled="true"></xue-checkbox></div>
        <div><span>禁用状态(选中)</span> <xue-checkbox :value="box4" :disabled="true"></xue-checkbox></div>
        <div><span>带文本</span> <xue-checkbox v-model="box5">选项一</xue-checkbox> <xue-checkbox v-model="box6">选项二</xue-checkbox></div>
        <div>
          <span>未知状态(常用于全选框)</span>
          <xue-checkbox v-model="box7" :indeterminate="indeterminate">部分选中</xue-checkbox>
          <xue-checkbox v-model="box7" :indeterminate="indeterminate" :disabled="true">部分选中 + 禁用</xue-checkbox>
        </div>
      </div>
      <div class="markdown" v-html="markdown"></div>
    </div>
  </div>
</template>

<script>
import { XueCheckbox } from 'xue-ui'
import markdown from './docs/Checkbox.md'


export default {
  components: {
    XueCheckbox,
  },
  data () {
    return {
      markdown,
      box1: false,
      box2: true,
      box3: false,
      box4: true,
      box5: false,
      box6: true,
      box7: false,
      indeterminate: true,
    }
  },
  watch: {
    box7 () { this.indeterminate = false }
  },
}
</script>

<style lang="scss" scoped>
.page-checkbox {
  .demo {
    div {
      margin: 10px 0;
      span:first-child {
        display: inline-block;
        min-width: 160px;
      }
    }
  }
}
</style>

