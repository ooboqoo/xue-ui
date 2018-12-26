<template>
  <div class="xue-tabs">
    <template v-if="links">
      <RouterLink v-for="(link, idx) in links" :key="idx" :to="link.url">
        {{ link.text }}<sup v-if="link.dot" class="xue-tabs__badge-dot" />
      </RouterLink>
    </template>
    <template v-if="tabs">
      <a v-for="(tab, idx) in tabs" :key="idx" :class="{active: tab.active}" @click="tab.click">
        {{ tab.text }}<sup v-if="tab.dot" class="xue-tabs__badge-dot" />
      </a>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    links: Array,
    tabs: Array,
  },
}
</script>

<style lang="scss">
.xue-tabs > a {
  display: inline-block;
  position: relative;
  min-width: 80px;
  height: 30px;
  padding: 0 10px;
  border: solid 1px #c5c8d0;
  background-color: #fff;
  color: #232323;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  vertical-align: top;
  box-sizing: border-box;
  user-select: none;

  &:first-child {
    border-right: 0;
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-left: 0;
    border-radius: 0 3px 3px 0;
  }

  &.active,
  &.router-link-exact-active {
    border-color: #8b9eb6;
    background-color: #8b9eb6;
    color: #fff;
  }
}

.xue-tabs__badge-dot {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f50;
  box-shadow: 0 0 0 1px #fff;
  z-index: 10;
}
</style>
