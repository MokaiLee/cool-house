<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header style="background-color: #545c64;border-bottom: solid 1px rgb(122, 129, 136)">
        <Header title="管理系统"/>
      </el-header>
      <el-container>
        <el-aside class="my-aside" :width="asideWidth">
          <Aside :is-collapse="isCollapse"></Aside>
        </el-aside>
        <el-container>
          <el-header height="40px" style="background-color: #fff;box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);display: flex">
            <div class="collapse" @click="isCollapse = !isCollapse">
              <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
            </div>
            <Breadcrumb></Breadcrumb>
          </el-header>
          <el-main>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Aside from "./components/Aside";
import Breadcrumb from "./components/Breadcrumb";

export default {
  name: 'app',
  components: {
    Header,
    Aside,
    Breadcrumb
  },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    asideWidth() {
      return this.isCollapse ? '64px' : '200px'
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.my-aside {
  transition: width 0.28s;
  background-color: #545c64;
}
  .collapse {
    margin-right: 10px;
    width: 35px;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
  }
  .collapse:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
</style>
