<template>
  <div class="header-wrapper">
    <div class="logo">
      <span>{{title}}</span>
    </div>
    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#d1d1d1"
            active-text-color="#c7000b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="user-info">
      <div class="user-avatar user-info-item">
        <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="user-name user-info-item">
        <span>{{userName}}</span>
      </div>
      <div class="user-logout user-info-item">
        <el-tooltip content="退出">
          <i class="el-icon-switch-button"></i>
        </el-tooltip>
      </div>
      <div class="user-info-item">
        <i class="el-icon-more"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: String
    },
    data() {
      return {
        activeIndex2: '1',
        userName: '管理员'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .header-wrapper {
    color: #d1d1d1;
    height: 60px;
    display: flex;
    flex-direction: row;
  }

  .logo {
    width: 200px;
    font-size: 30px;
    line-height: 60px;
  }

  .user-info {
    margin-left: auto;
    display: flex;
    padding: 16px 0;
  }

  .user-info-item {
    margin-right: 15px;
    cursor: pointer;
    span,i {
      line-height: 28px;
    }
    i {
      font-weight: bold;
    }
  }

  .user-logout:hover {
    color: #c7000b;
  }
</style>