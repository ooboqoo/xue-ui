<template>
  <div id="app" class="layout__container">
    <SideNav class="layout__nav" />
    <RouterView class="layout__content" />
  </div>
</template>

<script>
import SideNav from './SideNav'

export default {
  components: {
    SideNav,
  }
}
</script>

<style lang="scss" scoped>
.layout__container {
  display: flex;
  margin: auto;
  padding: 0;

  @media screen and (min-width: 1210px) {
    padding-left: calc((100% - 1210px) / 2);
  }
}

.layout__nav {
  flex: none;
  width: 220px;
}

.layout__content {
  width: 100%;
  height: calc(100vh - 40px);
  margin: 0;
  padding: 20px;
  overflow: auto;

  @media screen and (min-width: 1210px) {
    padding-right: calc(100% - 1210px);
  }
}
</style>
