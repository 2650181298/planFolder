<template>
    <div class="home">
        <form @submit="insertData">
            <input type="text" v-model="name">
            <button>添加班级</button>
        </form>
        <div id="divdiv"></div>
        <ul>
            <li class="el-table" :data="list" style= "width: 100%" v-for = "item in list" >
                <span >班级Id：{{item.id}} </span> 
                <span >班级:{{item.name}}</span>
                <button @click="del(item.id)" class="el-button" :disabled="disabled" :autofocus="autofocus" :type="nativeType" id="clec">删除</button>
                <button @click="puttt(item.id)" class="el-button" :disabled="disabled" :autofocus="autofocus" :type="nativeType" id="clec">修改</button><br><br>
            </li>
            
            
            
                  <!-- <el-button type="danger" prop="id" @click.native="handleClick(id);" icon="el-icon-delete" circle></el-button> -->
            
            <!-- <span v-for = "items in listll">学生的clazz_id:{{items.clazz_id}} </span> -->
            <!-- <span v-for = "items in listll">学生班级联查Id：{{items.clazz_id}} 班级:{{items.name}}<button @click="del(item.id)">删除</button><br></span> -->
        </ul>
        <!-- 回顶部按钮为一张50*50的图片 -->
        <!-- btnFlag 控制图片显示隐藏 -->
        <!-- backTop 回顶部的方法 -->
        <img v-if="btnFlag" class="go-top" src="../assets/logo.png" @click="backTop">
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import { scrypt } from 'crypto';
export default {
    name: "home",
    data() {
        return {
            list:[],
            listll:[],
            name:''
        };
    },
    methods:{
        //查找
        getList(){
            axios.get("http://127.0.0.1:7001/messagelest")
            .then(res => {
                console.log(res);
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
            axios.get("http://127.0.0.1:7001/messagelests")
            .then(res => {
                console.log(res);
                this.listll = res.data;
                // this.listlest = res.data;
            })
            .catch(err => {
                console.log(err);
            });
            
        },

// vue的两个生命钩子，这里不多解释。
// window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
mounted () {
  window.addEventListener('scroll', this.scrollToTop)
},
destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},
 
 
methods: {
  // 点击图片回到顶部方法，加计时器是为了过渡顺滑
  backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },
 
  // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
  scrollToTop () {
    let that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop > 60) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
},





        //删除
        del(id){
            axios.delete(`http://127.0.0.1:7001/messagelests/`+id)
            // .then(res => {
            //     this.list = res.data;
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            this.$router.go(0);

        },
        handleClick(id) {
            axios.delete(`http://127.0.0.1:7001/messagelests/`+id)
            this.$emit('click', id);
            this.$router.go(0);
            console.log(9999999999999999)
            console.log(item.id);
        },


        //修改
        puttt(id){ 
                this.$prompt('请输入要修改的内容', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                //   inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                    axios.put('http://127.0.0.1:7001/messagelests/'+id,{
                        putstu:value
                    })
                                this.$message({
                                  type: 'success',
                                  message: '修改成功:'
                                });
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '取消输入'
                  });       
                })
        },

       









        //添加
        insertData(){
            axios.post("http://127.0.0.1:7001/messagelests",{
                name:this.name
            })
            .then(res => {
                this.list = res.data;
            })
            .catch(err => {
                console.log(err);
            });
            this.$router.go(0);
        }
    },
    created() {
        this.getList();
    },
    
};



</script>


<style scoped>
#clec{
    float: right;
}
#divdiv{
    width: 100%;
    height: 1080px;
    border: 1px rgb(159, 158, 158) solid;
}


</style>
