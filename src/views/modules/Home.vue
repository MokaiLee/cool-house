<template>
  <el-table
          :data="tableData">
    <el-table-column
            prop="date"
            label="日期">
    </el-table-column>
    <el-table-column
            prop="name"
            label="姓名">
    </el-table-column>
    <el-table-column
            prop="address"
            label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  created() {
    console.log(document.documentElement.clientWidth)
    console.log(document.body.clientWidth)
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
