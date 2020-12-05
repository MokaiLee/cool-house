<template>
  <div>
    <el-submenu v-if="data.show && data.children && data.children.length > 0" :index="data.path">
      <template slot="title">
        <i v-if="data.icon" :class="'el-icon-' + data.icon"></i>
        <span>{{data.name.length > 7 ? data.name.substring(0,7) + '...' : data.name}}</span>
      </template>
      <menu-item v-for="child in data.children" :data="child" :key="child.path"></menu-item>
    </el-submenu>
    <el-tooltip v-else-if="data.show" placement="right" :content="data.name" :disabled="!isCollapse && data.name.length < 8">
      <el-menu-item :index="data.path" :route="data.path">
        <i v-if="data.icon" :class="'el-icon-' + data.icon"></i>
        <span>{{data.name.length > 7 ? data.name.substring(0,7) + '...' : data.name}}</span>
      </el-menu-item>
    </el-tooltip>
  </div>
</template>

<script>
  export default {
    name: "MenuItem",
    props: {
      data: Object,
      isCollapse: Boolean
    },
    computed: {
    }
  }
</script>

<style scoped>

</style>