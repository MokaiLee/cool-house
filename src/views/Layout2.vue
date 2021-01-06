<template>
  <div id="app">
    <div id="header">header</div>
    <div id="content">
      <div style="background: green;height: 20px;"></div>
      <div style="background: white;height: 2000px;"></div>
      <div style="background: blue;height: 20px;"></div>
    </div>
    <div id="aside">aside</div>
    <div id="footer">footer</div>
  </div>
</template>

<script>
  export default {
    name: "Layout2"
  }
</script>

<style scoped>
  #app {
    height: 100%;
    padding: 60px 0 50px 200px;
    position: relative;
  }
  #header {
    background-color: aquamarine;
    height: 60px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  #content {
    background-color: antiquewhite;
    width: 100%;
    height: 100%;
  }
  #aside {
    background-color: #d1d1d1;
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    width: 200px;
  }
  #footer {
    background-color: #c7000b;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
</style>