<template>
  <div>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#d1d1d1"
            text-color="#4b4c4e"
            active-text-color="#c7000b"
            :collapse="isCollapse"
            router>
      <menu-item v-for="menu in menuData" :data="menu" :key="menu.id"></menu-item>
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
        menuData: []
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