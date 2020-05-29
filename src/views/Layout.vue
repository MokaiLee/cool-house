<template>
  <el-container>
    <el-header class="app-header">
      <Header title="管理系统"/>
    </el-header>
    <router-view></router-view>
  </el-container>
</template>

<script>
  import Header from "../components/Header";

  export default {
    name: "Layout",
    components: {
      Header
    }
  }
</script>

<style scoped>
  .app-header {
    background-color: #545c64;
  }
</style>