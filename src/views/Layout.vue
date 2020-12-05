<template>
  <div :class="asideAvailable ? 'layout-container' : 'layout-container-nob-breadcrumb'">
    <div class="app-header">
      <Header title="管理系统"/>
    </div>
    <transition v-if="asideAvailable"  name="fade" mode="out-in">
      <div>
        <div class="app-aside" :style="'width: ' + asideWidth + ';'">
          <Aside :is-collapse="isCollapse"></Aside>
        </div>
        <div class="app-breadcrumb" :style="'margin-left: ' + asideWidth + ';'">
          <div class="app-collapse" @click="isCollapse = !isCollapse">
            <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
          </div>
          <Breadcrumb></Breadcrumb>
        </div>
        <div class="app-main" :style="'margin-left: ' + asideWidth + ';'">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </transition>
    <transition v-else name="fade" mode="out-in">
      <router-view class="app-main"></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Aside from "../components/Aside";
  import Breadcrumb from "../components/Breadcrumb";

  export default {
    name: "Layout",
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
        return this.isCollapse ? '64px' : '220px'
      },
      asideAvailable() {
        let tmpArr = this.$store.state.menus.filter(menu => menu.path === '/' + this.$route.path.match(/[0-9a-zA-Z_]+/)[0])[0]
        if(tmpArr){
          if (tmpArr.children){
            return tmpArr.children.length > 0
          }
        }
        return false
      }
    },
  }
</script>

<style scoped>
  .layout-container {
    padding-top: 100px;
  }

  .layout-container-nob-breadcrumb {
    padding-top: 60px;
  }

  .app-header {
    padding: 0 20px 0 20px;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
  }

  .app-aside {
    transition: width 0.28s;
    float: left;
    position: fixed;
    bottom: 0;
    top: 60px;
  }

  .app-breadcrumb {
    transition: margin-left 0.28s;
    height: 40px;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 60px;
  }

  .app-main {
    transition: margin-left 0.28s;
    padding: 25px;
  }

  .app-collapse {
    margin-right: 10px;
    width: 35px;
    line-height: 40px;
    text-align: center;
    font-size: 25px;
  }

  .app-collapse:hover {
    cursor: pointer;
  }
</style>