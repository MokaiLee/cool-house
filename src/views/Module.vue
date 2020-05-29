<template>
  <el-container>
    <el-aside class="app-aside" :width="asideWidth">
      <Aside :is-collapse="isCollapse"></Aside>
    </el-aside>
    <el-container>
      <el-header class="app-breadcrumb" height="40px">
        <div class="app-collapse" @click="isCollapse = !isCollapse">
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
</template>

<script>
  import Aside from "../components/Aside";
  import Breadcrumb from "../components/Breadcrumb";

  export default {
    name: "Module",
    components: {
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
    methods: {}
  }
</script>

<style scoped>
  .app-aside {
    transition: width 0.28s;
    background-color: #d1d1d1;
  }

  .app-breadcrumb {
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    display: flex
  }

  .app-collapse {
    margin-right: 10px;
    width: 35px;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
  }

  .app-collapse:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
</style>