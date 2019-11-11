<template>
  <div>
    <!-- 同级组件传值（非父子级组件传值） -->
    <el-container>
      <el-header>
        <Logout></Logout><!-- 注销 -->
        <Book-edit></Book-edit><!-- 功能（增删改查）部分 -->
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Nav></Nav><!-- 左侧可下拉框 -->
        </el-aside>
        <el-main>
          <Contentsss></Contentsss><!-- 富文本编辑器（编辑部分） -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Logout from "@/components/Logout.vue"; //注销
import Nav from "@/components/Nav"; //左侧可下拉框
import BookEdit from "@/components/BookEdit"; //功能（增删改查）部分
import Contentsss from "@/components/Contentsss.vue"; //富文本编辑器（编辑部分）
export default {
  name: "index",
  components: { Logout, Nav, BookEdit, Contentsss },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
