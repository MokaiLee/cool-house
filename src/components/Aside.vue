<template>
  <div>
    <div class="app-aside-content">
      <el-scrollbar style="height: 100%">
        <el-menu
            :default-active="currentActive"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#d1d1d1"
            text-color="#545c64"
            active-text-color="#c7000b"
            :collapse="isCollapse"
            router>
          <menu-item v-for="menu in asideMenuData" :data="menu" :key="menu.path" :is-collapse="isCollapse"></menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <div id="copyRight" class="app-aside-footer">&copy;2021&nbsp;KooL&nbsp;House</div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
import {mapGetters} from "vuex";

export default {
  name: "Aside",
  components: {
    MenuItem
  },
  props: {
    isCollapse: Boolean
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['menus']),
    asideMenuData() {
      let tmpArr = this.menus.filter(menu => menu.path === '/' + this.$route.path.match(/[0-9a-zA-Z_]+/)[0])[0]
      return tmpArr.children ? tmpArr.children : []
    },
    currentActive() {
      return this.$route.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
}
</script>

<style scoped>
.app-aside-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 70px;
  left: 0;
}
.app-aside-footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  line-height: 70px;
  text-align: center;
}
</style>