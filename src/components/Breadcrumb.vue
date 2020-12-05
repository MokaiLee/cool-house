<template>
  <el-breadcrumb class="my-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="route in routeList" :key="route.path">{{route.meta.title}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "Breadcrumb",
    computed: {
      routeList() {
        return this.$route.matched.filter(route => route.meta.title)
      }
    }
  }
</script>

<style scoped>
  .my-breadcrumb {
    line-height: 40px;
  }
</style>