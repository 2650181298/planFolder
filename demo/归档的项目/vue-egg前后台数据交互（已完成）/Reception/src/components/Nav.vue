<template>
  <div>
    <!-- 白色下拉框（选择书） -->
    <div class="en">
      <el-select v-model="bookId" placeholder="选择电子书" style="width:80%;" @click.native="reloada">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.id"
          @click.native="givenChapterz(item.id)"
        ></el-option>
      </el-select>
    </div>

    <!-- 黑色下拉框（选择章） -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
    >
      <!-- 选择章 -->
      <el-submenu
        v-for="item in chapterAndFestivelList"
        :key="item.id"
        :index="String(item.id)"
        @click.native="givenChapterzz()"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <!-- 选择节 -->
        <el-menu-item
          v-for="festiveitem in item.festiveList"
          :index="String(festiveitem.id)"
          :key="festiveitem.id"
          v-model="putChapterId"
          @click="sendId(festiveitem.id)"
        >{{festiveitem.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>


<script>
// import axios from "axios";
import bus from "@/bus/bus.js";
import request from "@/utils/request.js";
export default {
  data() {
    return {
      chapterAndFestivelList: [],
      options: [], //获取的书名
      chapter: [], //获取的章名
      givenChapter: [], //特定章的内容
      givenSection: [], //特定节的内容
      item: [],
      bookId: "", //书的id
      putChapterId: "", //章的id
      md: "123"
    };
  },
  methods: {
    reloada() {
      this.getbookname();
    },
    getbookname() {
      // axios.get("http://127.0.0.1:7001/book").then(res => {
      //   this.options = res.data.data;
      // });
      //获取书
      request({
        url: "/book",
        method: "get"
      }).then(res => {
        this.options = res.data;
      });
    },

    givenChapterzz(id) {
      request({
        url: "/chapter/" + this.bookId,
        method: "get"
      }).then(res => {
        this.chapterAndFestivelList = res.data;
      });
    },

    givenChapterz(id) {
      // 联查章与节
      // axios.get("http://127.0.0.1:7001/show/" + this.bookId, {}).then(res => {
      //   this.chapterAndFestivelList = res.data.data;
      // });
      request({
        url: "/chapter/" + this.bookId,
        method: "get"
      }).then(res => {
        this.chapterAndFestivelList = res.data;
      });
      bus.$emit("sendBookId", id);
    },

    gitchaptername() {
      // axios.get("http://127.0.0.1:7001/chapter").then(res => {
      //   this.chapter = res.data.data;
      // });
      //获取章
      request({
        url: "/chapter",
        method: "get"
      }).then(res => {
        this.chapter = res.data;
      });
    },

    handleOpen(key, keyPath) {
    },

    handleClose(key, keyPath) {
      // axios.get("http://127.0.0.1:7001/get/" + key, {}).then(res => {
      //   this.givenSection = res.data.data;
      // });
      //联查节
      request({
        url: "/chapter/" + key,
        method: "get"
      }).then(res => {
        this.chapter = res.data;
      });
    },
    sendId(id) {
      //向富文本编辑器传一个id和获取到的md
      bus.$emit("sendFesId", id);
      // bus.$emit("sendFesmd", this.md);
    }
  },
  created() {
    this.getbookname(); //获取书
    this.gitchaptername(); //获取章
  }
};
</script>      

<style>
.en {
  line-height: 0px;
  position: fixed;
  top: 10px;
  left: -10px;
}
</style>