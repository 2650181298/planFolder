<template>
  <div>
    <!-- 查 -->
    <el-dropdown>
      <el-button type="primary" size="mini">
        <el-button type="primary" size="mini" @click="dialogBook = true">添加书籍</el-button>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="warning" size="mini" @click="showEditDialog">编辑书籍</el-button>
        </el-dropdown-item>
        <el-dropdown-item></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 增 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogBook"
      width="30%"
      :before-close="handleClose"
      :data="clazzList"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="书籍名称">
          <el-input v-model="bookname"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogBook = false">取 消</el-button>
        <el-button type="primary" @click="insertBook()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改与删除 -->
    <el-dialog title="编辑" :visible.sync="changeBook" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="选择书籍">
          <el-select v-model="putbookid">
            <el-option v-for=" item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="书籍名称" @click="changeBook">
          <el-input v-model="newbookname"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="changeBook = false">取 消</el-button>
        <el-button @click="putBookname()">修改</el-button>
        <el-button
          type="text"
          @click="delbookname()"
          style="background:red;color:#fff;width:25%;"
        >删除</el-button>
      </span>
    </el-dialog>

    <!-- 章 -->
    <el-dropdown style="margin-left:2%">
      <el-button type="primary" size="mini">
        <el-button type="primary" size="mini" @click.native="dialogChapterzz()">添加章</el-button>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="warning" size="mini" @click.native="dialogVisiblezz()">编辑章</el-button>
        </el-dropdown-item>
        <el-dropdown-item></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 添加章 -->
    <el-dialog title="提示" :visible.sync="dialogChapter" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="选择书">
          <el-select v-model="putbookid" placeholder="选择要添加章节的书">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="章节名称">
          <el-input style="width:70%" v-model="chaptername"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChapter = false">取 消</el-button>
        <el-button type="primary" @click="insertchapter()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改/删除章 -->
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="选择章">
          <el-select v-model="putChapterId">
            <el-option
              v-for=" item in givchapter"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="章节名称" @click="dialogVisible">
          <el-input v-model="newchaptername"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="putChapterName()">修改</el-button>
        <el-button type="text" @click="delchapter()" style="background:red;color:#fff;width:25%;">删除</el-button>
      </span>
    </el-dialog>

    <!-- 节 -->
    <el-dropdown style="margin-left:2%">
      <el-button type="primary" size="mini">
        <el-button type="primary" size="mini" @click="Additionsectionzz()">添加节</el-button>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-button type="warning" size="mini" @click="changeSectionzz()">编辑节</el-button>
        </el-dropdown-item>
        <el-dropdown-item></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="提示" :visible.sync="Additionsection" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <!-- <el-form-item label="选择书籍">
          <el-select v-model="bookname" placeholder="选择电子书">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>-->

        <!-- 添加节 -->
        <el-form-item label="选择章">
          <el-select v-model="putChapterId">
            <el-option
              v-for=" item in givchapter"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="节名称" style="width:70%">
          <el-input v-model="sectionName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Additionsection = false">取 消</el-button>
        <el-button type="primary" @click="insertsection()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改节 -->
    <el-dialog title="编辑" :visible.sync="changeSection" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="选择章">
          <el-select v-model="putChapterId">
            <el-option
              v-for=" item in givchapter"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              @click.native=" givenSectionz()"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择节">
          <el-select v-model="putSectionId">
            <el-option
              v-for=" item in givenSection"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="节名称" @click="changeSection">
          <el-input v-model="newSection"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="changeSection = false">取 消</el-button>
        <el-button @click="putSectionName()">修改</el-button>
        <el-button type="text" @click="delSection()" style="background:red;color:#fff;width:25%;">删除</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import axios from "axios";
import request from "@/utils/request.js";
import bus from "@/bus/bus.js";
export default {
  components: {},
  data() {
    return {
      options: [], //书的内容
      chapter: [], //章的内容
      section: [], //节的内容
      givenSection: [], //特定节的内容
      givchapter: [], //特定章的内容

      dialogChapter: false, //添加章
      dialogVisible: false,
      dialogBook: false, //添加书
      changeBook: false, //修改书
      changechapter: false, //修改章
      // changechapter: false,

      Additionsection: false, //添加节
      changeSection: false, //修改节
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        value: "",
        key: ""
        // putbookname:"",
      },
      bookname: "",
      clazzList: "",
      putbookid: "0",
      editDataId: "",
      newbookname: "",
      sectionName: "", //添加节名称
      newSection: "", //修改节名称
      chaptername: "",
      putChapterId: "", //上传章id
      putSectionId: "", //节的id

      bookId: "", //书的id
      navchatid: 0, //
      newchaptername: "",

      nullContent: "", //空内容

      zhang: "",
      value: "",
      label: {},
      editId: 0
    };
  },
  methods: {
    requestchapter() {
      //定义的获取特定章
      request({
        url: "/union/" + this.putbookid,
        method: "get"
      }).then(res => {
        this.givchapter = res.data;
      });
    },
    handleClose() {
      //书
      this.dialogChapter = false;
      this.dialogBook = false;
      this.changeBook = false;
      this.changechapter = false;
      this.Additionsection = false;
    },
    openClose() {
      //章
      this.dialogChapter = false;
      this.dialogBook = false;
      this.changechapter = false;
      this.Additionsection = false;
    },
    dialogVisiblezz() {
      //编辑张
      this.requestchapter();
      this.dialogVisible = true;
    },
    Additionsectionzz() {
      //点击添加节
      this.requestchapter();
      this.Additionsection = true;
    },
    changeSectionzz() {
      //点击获取章

      this.requestchapter();
      this.changeSection = true;
    },
    dialogChapterzz() {
      //点击添加章
      this.requestchapter();
      this.dialogChapter = true;
    },

    //获取
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
    gitsection() {
      // axios.get("http://127.0.0.1:7001/festival").then(res => {
      //   this.section = res.data.data;
      // });
      //获取节
      request({
        url: "/festival",
        method: "get"
      }).then(res => {
        this.section = res.data;
      });
    },

    //联查

    givenSectionz() {
      // axios
      //   .get("http://127.0.0.1:7001/get/" + this.putChapterId, {})
      //   .then(res => {
      //     this.givenSection = res.data.data;
      //   });
      // 联查节
      request({
        url: "/festival/" + this.putChapterId,
        method: "get"
      }).then(res => {
        this.givenSection = res.data;
      });
    },

    gitAll() {
      //获取所有数据
      this.getbookname();
      this.gitchaptername();
      this.gitsection();
    },

    showEditDialog() {
      this.changeBook = true;
      // this.gitAll()
    },

    //添加
    insertBook() {
      // axios
      //   .post("http://127.0.0.1:7001/book", {
      //     name: this.bookname
      //   })
      //   .then(res => {
      //     this.dialogBook = false; //执行之后关闭弹框
      //     this.bookname = ""; //执行之后文本框值为空
      //     this.getbookname(); //重新执行getclazzList函数 重新获取clazzList列表
      //   });
      //添加书
      request({
        url: "/book",
        method: "post",
        data: {
          name: this.bookname
        }
      }).then(res => {
        this.dialogBook = false; //执行之后关闭弹框
        this.bookname = ""; //执行之后文本框值为空
        this.getbookname(); //重新执行getclazzList函数 重新获取clazzList列表
      });
    },
    insertchapter() {
      // axios
      //   .post("http://127.0.0.1:7001/chapter", {
      //     name: this.chaptername,
      //     id: this.putbookid
      //   })
      //   .then(res => {
      //     this.dialogChapter = false; //执行之后关闭弹框
      //     this.chaptername = ""; //执行之后文本框值为空
      //     this.putbookid = ""; //执行后选择框为空
      //     this.gitchaptername(); //重新执行getclazzList函数 重新获取clazzList列表
      //     this.getbookname();
      //   });

      //添加章
      request({
        url: "/chapter",
        method: "post",
        data: {
          name: this.chaptername,
          id: this.putbookid
        }
      }).then(res => {
        this.chaptername = ""; //执行之后文本框值为空
        // this.putbookid = ""; //执行后选择框为空
        this.gitchaptername(); //重新执行getclazzList函数 重新获取clazzList列表
        this.getbookname();
        // this.requestchapter();
        this.dialogChapter = false; //执行之后关闭弹框
      });
    },
    insertsection() {
      // this.putSectionId = this.section[this.section.length - 1].id + 1; //获取最后一个内容的id之后+1
      // axios
      //   .post("http://127.0.0.1:7001/festival", {
      //     name: this.sectionName,
      //     chapter_id: this.putChapterId
      //   })
      //   .then(res => {
      //     this.Additionsection = false; //执行之后关闭弹框
      //     this.sectionName = ""; //执行之后文本框值为空
      //     this.putChapterId = ""; //执行后选择框为空
      //     this.gitsection(); //重新执行getclazzList函数 重新获取clazzList列表
      //     this.getbookname();
      //   });
      //添加节
      request({
        url: "/festival",
        method: "post",
        data: {
          name: this.sectionName,
          chapter_id: this.putChapterId
        }
      }).then(res => {
        this.sectionName = ""; //执行之后文本框值为空
        // this.putChapterId = ""; //执行后选择框为空
        this.gitsection(); //重新执行getclazzList函数 重新获取clazzList列表
        this.getbookname();
        this.Additionsection = false; //执行之后关闭弹框
      });
    },

    editData(id) {
      this.changeBook = true; //打开的弹框
      this.editDataId = id;
    },

    //修改
    putBookname() {
      // axios
      //   .put("http://127.0.0.1:7001/book/" + this.putbookid, {
      //     putbookname: this.newbookname,
      //     putbookid: this.putbookid
      //   })
      //   .then(res => {
      //     this.changeBook = false; //执行后关掉弹框
      //     this.bookname = res.data;
      //     this.newbookname = "";
      //     this.putbookid = "";
      //     this.getbookname();
      //     this.gitchaptername();
      //   });
      //修改书
      request({
        url: "/book/" + this.putbookid,
        method: "put",
        data: {
          putbookname: this.newbookname,
          putbookid: this.putbookid
        }
      }).then(res => {
        this.changeBook = false; //执行后关掉弹框
        this.bookname = res.data;
        this.newbookname = "";
        this.putbookid = "";
        this.getbookname();
        this.gitchaptername();
      });
    },

    putChapterName() {
      // axios
      //   .put("http://127.0.0.1:7001/chapter/" + this.putChapterId, {
      //     name: this.newchaptername,
      //     id: this.putChapterId
      //   })
      //   .then(res => {
      //     this.dialogVisible = false; //执行后关掉弹框
      //     this.bookname = res.data;
      //     this.getbookname();
      //     this.chaptername = "";
      //     this.putChapterId = "";
      //     this.gitchaptername();
      //   });
      //修改章
      request({
        url: "/chapter/" + this.putChapterId,
        method: "put",
        data: {
          name: this.newchaptername,
          id: this.putChapterId,
          book_id: this.putbookid
        }
      }).then(res => {
        // this.bookname = res.data;
        this.chaptername = "";
        this.putChapterId = "";
        this.requestchapter();

        // this.getbookname();
        this.gitchaptername();
        this.dialogVisible = false; //执行后关掉弹框
      });
    },

    putSectionName() {
      // axios
      // .put("http://127.0.0.1:7001/festival/" + this.putSectionId, {
      //   name: this.newSection,
      //   chapter_id: this.putChapterId,
      //   id: this.putSectionId
      // })
      // .then(res => {
      //   this.changeSection = false; //执行后关掉弹框
      //   this.bookname = res.data;
      //   this.newSection = "";
      //   this.putChapterId = "";
      //   this.putSectionId = "";
      //   this.gitAll();
      //   this.getbookname();
      // });
      //修改节
      request({
        url: "/festival/" + this.putSectionId,
        method: "put",
        data: {
          name: this.newSection,
          chapter_id: this.putChapterId,
          id: this.putSectionId
        }
      }).then(res => {
        this.bookname = res.data;
        this.newSection = "";
        // this.putChapterId = "";
        this.putSectionId = "";
        this.changeSection = false; //执行后关掉弹框
        this.gitAll();
        this.getbookname();
      });
    },

    //删除
    delbookname() {
      //删除书
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // axios
          //   .delete("http://127.0.0.1:7001/book/" + this.putbookid, {})
          //   .then(res => {
          //     this.showEditDialog = false;
          //     if (res.data == "书中有内容不可删除") {
          //       alert(res.data);
          //     } else {
          //       this.bookname = res.data;
          //       this.getbookname();
          //       this.chaptername = "";
          //       this.putbookid = "";
          //       this.gitchaptername();
          //     }
          //   });
          this.changeBook = false;
          request({
            url: "/book/" + this.putbookid,
            method: "delete"
          }).then(res => {
            if (res.data == "书中有内容不可删除") {
              this.$message({
                type: "success",
                message: "书中有内容不可删除!"
              });
            } else {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.bookname = res.data;
              this.chaptername = "";
              this.putbookid = "";
              this.changeBook = false;
              this.getbookname();
              this.gitchaptername();
            }
          });
        })

        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

      // setTimeout(() => {
      //   this.changeBook = false;
      // }, 2000);
    },

    delchapter() {
      //删除章
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // axios
          //   .delete("http://127.0.0.1:7001/chapter/" + this.putChapterId, {})
          //   .then(res => {
          //     this.dialogVisible = false;
          //     if (res.data == "书中有内容不可删除") {
          //       alert(res.data);
          //     } else {
          //       this.chaptername = res.data;
          //       this.chaptername = "";
          //       this.putChapterId = "";
          //       this.getbookname();
          //       this.gitchaptername();
          //     }
          //   });
          this.dialogVisible = false;
          request({
            url: "/chapter/" + this.putChapterId,
            method: "delete"
          }).then(res => {
            if (res.data == "章中有节不可删除") {
              this.$message({
                type: "success",
                message: "书中有内容不可删除!"
              });
            } else {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.chaptername = res.data;
              this.chaptername = "";
              this.putChapterId = "";
              this.getbookname();
              this.gitchaptername();
            }
          });
        })

        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    delSection() {
      //删除节
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // axios
          //   .delete("http://127.0.0.1:7001/festival/" + this.putSectionId, {})
          //   .then(res => {
          //     this.changeSection = false;
          //     if (res.data == "书中有内容不可删除") {
          //       alert(res.data);
          //     } else {
          //       this.chaptername = res.data;
          //       this.chaptername = "";
          //       this.putSectionId = "";
          //       this.gitAll();
          //     }
          //   });
          this.changeSection = false;
          request({
            url: "/festival/" + this.putSectionId,
            method: "delete"
          }).then(res => {
            if (res.data == "节中有内容不可删除") {
              alert(res.data);
            } else {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.chaptername = res.data;
              this.chaptername = "";
              this.putSectionId = "";
              this.gitAll();
              this.givenSectionz();
            }
          });
        })

        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },

  created() {
    this.getbookname();
    this.gitsection();
    this.gitchaptername();

    bus.$on("sendFesId", id => {
      //传书id
      this.putbookid = id;
    });

    bus.$on("sendBookId", id => {
      this.putbookid = id;
    });

    request({
      url: "/union/" + this.putbookid,
      method: "get"
    }).then(res => {
      this.givchapter = res.data;
    });
  }
};
</script>
<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>