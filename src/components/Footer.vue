<template>
  <div class="footer-wrapper" :style="asyncStyle">
    <slot></slot>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapState(['isCollapse']),
    asyncStyle(){
      return {
        left: this.isCollapse ? '0' : '220px',
        width: this.isCollapse ? '100%' : 'calc(100% - 220px)',
      }
    }
  },
  created() {
    console.log('create footer')
    this.showFooter(true)
  },
  destroyed() {
    console.log('destroy footer')
    this.showFooter(false)
  },
  methods: {
    ...mapMutations(['showFooter'])
  }
}
</script>

<style scoped>
.footer-wrapper {
  transition: all 0.28s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 70px;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 -1px 3px 0 #d1d1d1;
}
</style>