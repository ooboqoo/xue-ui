<template>
  <div id="app" class="container">
    <side-nav class="nav"></side-nav>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import SideNav from './SideNav'

export default {
  name: "App",
  components: {
    SideNav,
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin: auto;
  padding: 0;
  .nav {
    flex: none;
    width: 220px;
  }
  .content {
    margin: 0;
    padding: 20px;
    width: 100%;
    height: calc(100vh - 40px);
    overflow: auto;
  }
  @media screen and (min-width: 1210px) {
    padding-left: calc((100% - 1210px) / 2);
    .content {
      padding-right: calc(100% - 1210px);
    }
  }
}
</style>
