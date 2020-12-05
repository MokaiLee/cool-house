<template>
  <div>
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
  </div>
</template>

<script>
  import MenuItem from "./MenuItem";
  export default {
    name: "Aside",
    components: {
      MenuItem
    },
    props: {
      isCollapse: Boolean
    },
    data() {
      return {

      }
    },
    computed: {
      asideMenuData() {
        let tmpArr = this.$store.state.menus.filter(menu => menu.path === '/' + this.$route.path.match(/[0-9a-zA-Z_]+/)[0])[0]
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

</style>