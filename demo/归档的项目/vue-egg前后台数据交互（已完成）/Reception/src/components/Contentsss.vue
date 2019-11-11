<template>
  <div id="main">
    <mavon-editor
      ref="md"
      @change="changeData"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
      v-model="value"
    />
    <div>
      <el-button type="success" @click="preservation">保存</el-button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import bus from "@/bus/bus.js";
import request from "@/utils/request.js";
export default {
  data() {
    return {
      value: "", //绑定的value也就是md格式的数据
      html: "", //HTML格式的数据
      id: "0"
    };
  },
  created() {
    bus.$on("sendFesId", id => {
      //自建事件接收Nav传过来的章的id
      this.id = id;
      // axios.get("http://127.0.0.1:7001/docsmd/" + id, {}).then(res => {
      //   this.value = res.data.data;
      // });
      request({
        url: "/docs/" + id,
        method: "get"
      }).then(res => {
        this.value = res.data;
      });
    });
  },
  methods: {
    changeData(value, render) {
      this.html = render;
      // this.md = value;
    },
    preservation() {
      //修改内容
      //点击保存向后台传章的id然后向后台调用修改
      // axios
      //   .put("http://127.0.0.1:7001/docs/" + this.id, {
      //     puthtml: this.html,
      //     putmd: this.value,
      //     festival_id: this.id
      //   })
      //   .then(res => {
      //     if (res.data.code !== 20000) {
      //       alert("保存失败");
      //     } else {
      //       alert("保存成功");
      //     }
      //   });
      request({
        url: "/docs/" + this.id,
        method: "put",
        data: {
          puthtml: this.html,
          putmd: this.value,
          festival_id: this.id
        }
      }).then(res => {
        if (res.data.code !== 20000) {
          alert("保存成功");
        } else {
          alert("保存失败");
        }
      });
    },

    // 保存图片
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("image", $file);
      request({
        url: "/uploadimg",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)

        // 说明
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */
        let url = res.file;
        this.$refs.md.$img2Url(pos, url);
      });
    },
    $imgDel(pos, $file) {
      let delURL = pos[0];
      // axios
        // .post(baseURL+"/deleteimg", {
        //   url: delURL
        // })
        // .then(res => {
        //   if (res.data.code !== 20000) {
        //     alert("删除失败");
        //   } else {
        //     alert("删除成功");
        //   }
        // });
    request({
        url: "/deleteimg",
        method: "post",
        data:{
          url: delURL
        }
      }).then(res => {
          if (res.data.code !== 20000) {
            alert("删除失败");
          } else {
            alert("删除成功");
          }
        });
    }
  }
};
</script>

<style scoped>
.auto-textarea-wrapper .auto-textarea-input.no-resize {
  height: 300px;
}
</style>
