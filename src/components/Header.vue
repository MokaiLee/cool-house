<template>
  <div class="header-wrapper">
    <div class="logo">
      <span>{{ title }}</span>
    </div>
    <el-menu
        router
        :default-active="currentActive"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#d1d1d1"
        active-text-color="#c7000b"
        @select="handleSelect">
      <el-menu-item v-for="menu in headerMenuData" :index="menu.path" :route="menu.path" :key="menu.path">
        <i v-if="menu.icon" :class="'el-icon-' + menu.icon" class="h-menu-icon"></i>
        <span>{{ menu.name }}</span>
      </el-menu-item>
    </el-menu>
    <div class="user-info">
      <div class="user-avatar user-info-item">
        <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
      </div>
      <div class="user-name user-info-item">
        <el-tooltip :disabled="userName.length < 6" :content="userName">
          <span>{{ userName.length > 5 ? userName.substring(0, 5) + '...' : userName }}</span>
        </el-tooltip>
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
import {mapGetters} from "vuex";

export default {
  name: "Header",
  props: {
    title: String
  },
  data() {
    return {
      userName: '系统管理员二'
    }
  },
  computed: {
    ...mapGetters(['menus']),
    headerMenuData() {
      return this.menus.filter(menu => menu.show)
    },
    currentActive() {
      return '/' + this.$route.path.match(/[0-9a-zA-Z_]+/)[0]
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
  /*min-width: calc(522px + 214px + 200px);*/
  min-width: 936px;
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

  span, i {
    line-height: 28px;
  }

  i {
    font-weight: bold;
  }
}
</style>