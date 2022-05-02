<template>
  <div>
    <van-nav-bar
      fixed
      :title="activeTitle"
    />
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </div>
    <van-tabbar route>
      <van-tabbar-item
        class="navTitle"
        to="/layout/home"
        replace
        icon="home-o"
      >首页</van-tabbar-item>
      <van-tabbar-item
        class="navTitle"
        to="/layout/search"
        replace
        icon="search"
      >搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      activeTitle: this.$route.meta.title,
    };
  },
  methods: {
    changeTab(str) {
      this.activeTitle = str;
    },
  },
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style>
.van-nav-bar {
  background-color: #c10c01;
}
.van-nav-bar__title {
  color: #ffffff;
}
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
