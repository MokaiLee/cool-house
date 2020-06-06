<template>
  <el-submenu v-if="data.children && data.children.length > 0" :index="data.id">
    <template slot="title">
      <i v-if="data.icon" :class="'el-icon-' + data.icon"></i>
      <span>{{data.name}}</span>
    </template>
    <menu-item v-for="child in data.children" :data="child" :key="child.id"></menu-item>
  </el-submenu>
  <el-menu-item v-else :index="data.id" :route="data.url">
    <i v-if="data.icon" :class="'el-icon-' + data.icon"></i>
    <span>{{data.name}}</span>
  </el-menu-item>
</template>

<script>
  export default {
    name: "MenuItem",
    props: {
      data: Object
    }
  }
</script>

<style scoped>

</style>