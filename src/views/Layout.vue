<template>
  <div :style="[asyncPaddingTop, asyncPaddingBottom]">
    <div class="app-header">
      <Header title="KooL-House"/>
    </div>
    <transition v-if="asideAvailable" name="fade" mode="out-in">
      <div>
        <div class="app-aside" :style="asyncWidth">
          <Aside :is-collapse="isCollapse"></Aside>
        </div>
        <div class="app-breadcrumb" :style="asyncMarginLeft">
          <div class="app-collapse" @click="toggleCollapse">
            <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
          </div>
          <Breadcrumb></Breadcrumb>
        </div>
        <div class="app-main" :style="asyncMarginLeft">
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
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Layout",
  components: {
    Header,
    Aside,
    Breadcrumb
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isCollapse', 'footerAvailable', 'menus']),
    asyncWidth() {
      return {width: this.isCollapse ? '64px' : '220px'}
    },
    asyncMarginLeft() {
      return {marginLeft: this.isCollapse ? '64px' : '220px'}
    },
    asyncPaddingTop() {
      return {paddingTop: this.asideAvailable ? '100px' : '60px'}
    },
    asyncPaddingBottom() {
      return {paddingBottom: this.footerAvailable ? '70px' : '0'}
    },
    asideAvailable() {
      let tmpArr = this.menus.filter(menu => menu.path === '/' + this.$route.path.match(/[0-9a-zA-Z_]+/)[0])[0]
      if (tmpArr) {
        if (tmpArr.children) {
          return tmpArr.children.length > 0
        }
      }
      return false
    }
  },
  created() {
    this.api({url:'/test'}).then(data => console.log(data)).catch(err => console.log(err.message))
  },
  methods: {
    ...mapMutations(['toggleCollapse'])
  }
}
</script>

<style scoped>
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
  padding: 25px;
  height: 100%;
  min-width: 1000px;
  transition: margin-left 0.28s;
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