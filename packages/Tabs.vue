<template>
  <div class="xue-tabs">
    <router-link v-for="(link, idx) in links" :key="idx" :to="link.url">
      {{link.text}}<sup class="badge-dot" v-if="link.dot"></sup>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
  },
}
</script>

<style lang="scss">
.xue-tabs a {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;
  min-width: 80px;
  height: 30px;
  line-height: 30px;
  vertical-align: top;
  font-size: 14px;
  color: #232323;
  text-align: center;
  background-color: #fff;
  border: solid 1px #c5c8d0;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  &:first-child {
    border-radius: 3px 0 0 3px;
    border-right: 0;
  }
  &:last-child {
    border-radius: 0 3px 3px 0;
    border-left: 0;
  }
  &.router-link-exact-active {
    color: #fff;
    background-color: #8b9eb6;
    border-color: #8b9eb6;
  }
  .badge-dot {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 8px;
    height: 8px;
    background: #f50;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #fff;
    z-index: 10;
  }
}
</style>
