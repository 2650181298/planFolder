<template>
      <!-- 关联用户 -->
    <div id="App_4">
      <div class="Pic_Div">
        <img src="../assets/状态栏.png" alt="" class="Status_Bar_4">
    </div>
        <div class="header_box4">
        <router-link to="/Bxx_state"><img src="../assets/Return.png" alt="" class="Return_2"></router-link>
        <img src="../assets/add.png" alt="" class="Add_Pic">
      <span class="bjjl_span4">关联用户</span>
    </div>
<!-- header_box盒子 -->
    <div class="Conter_4">
      <div class="bj" v-if="list.showing && list.src" v-for="(list,index) in list">
        <span class="Conter_Div4_span">保险箱将按顺序拨号,拖动可排序</span>
         <img src="../assets/Forknumber@2x.png" alt="" @click="del(list,index)" class="bj_imgcha">
    </div>
      <!-- 提示框+词 -->
      <div class="Conter_div4_2">
      <div class="pic_bgc1">
        <img src="../assets/Relation1@2x.png" alt="">
      </div>
      <!-- 图的背景颜色 -->
  <span class="pic_bgc1_san">13149869439</span>
      </div>
      <!-- 下边框 -->
          <!-- /* 第一个拨号信息 */ -->
      <div class="Conter_div4_3">
        <div class="pic_bgc2">
        <img src="../assets/Relation1@2x.png" alt="">
      </div>
      <!-- 图的背景颜色 -->
  <span class="pic_bgc2_san">13149869439</span>
      </div>
      <!-- 下边框 -->
          <!-- /* 第二个拨号信息 */ -->
      <div class="Conter_div4_4">
      <div class="pic_bgc3">
        <img src="../assets/Relation1@2x.png" alt="">
      </div>
      <span class="pic_bgc3_san">49869439</span>
      <!-- 图的背景颜色 -->
      </div>
      
    </div>
          <!-- /* 第三个拨号信息 */ -->


      <!-- 以下为结尾 -->
        <div class="footer_4">
        <ul class="list_4">
            <li class="list_4_li1">
                
                <router-link to="/Bxx_state" class="bxx"> 
                <img src="../assets/fase1.png" alt="" class="fase2">

                <span class="bxx4">保险箱</span>
                </router-link>
            </li>
            
            <li class="list4_li2">
        
                <router-link to="/About_door" class="kmjl">
                 <img src="../assets/Opendoor1.png" alt="" class="Opendoor2">
                
               <span class="kmjl4"> 开门记录</span>
                </router-link>
        
            <li class="list4_li3">
                <router-link to="/Alarm_Record" class="bjjl">
                <img src="../assets/Callthepolice1.png" alt="" class="Callthepolice2">
                <span class="bjjl4">报警记录</span>
                </router-link>
            </li>
            <li class="list4_li4">
                 <router-link to="/Associated_User"  class="glyh">
            <img src="../assets/Relation2.png" alt="" class="Relation2">
            <span class="glyh4">关联用户</span>
            </router-link>
            </li>
        </ul>
    </div>
    <!-- 以上为路由结尾 -->
    </div>
</template>
<script>
//<div class="Conter_div4_1">
       // <span class="Conter_Div4_span">保险箱将按顺序拨号,拖动可排序</span>
        //<img src="./pic/Forknumber@2x.png" alt="" class="Conter_Div4_img">
      // </div>
export default {
    name : "App_4",
    data(){
      return{
        Div4_span :"保险箱将按顺序拨号,拖动可排序",
         list:[
              {
                  showing:true,
                  src:"../assets/Forknumber@2x.png"
              } 
          ]
      }
    },
    methods:{
       del(list,index){
              this.$set(this.list[index],'showing',false);
        }
    }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
  #App_4{
    width: 7.5rem;
    height: 11rem;
  }
  .Pic_Div{
    width: 100%;
    float: left;
     background-color: black;
  }
.Status_Bar_4{
        width: 95%;
        float: left;
        margin-left: 0.15rem;

    }
    /* 状态栏 */
 .header_box4{
    width: 100%;
    height: 1rem;
    float: left;
    background-color: black;
  }
  .Return_2{
     width: 0.26rem;
        height: 50%;
        margin-left: 0.3rem;
        margin-top: 0.3rem;
        float: left;
  }
  /* 弹出按钮< */
  .bjjl_span4{
     float: left;
        font-size: 0.3rem;
        color: white;
        margin-left: 2.6rem;
        /* line-height: 0.9rem; */
        margin-top: 0.28rem;
        font-weight: bold;
  }
  /* 报警记录 */
  .Add_Pic{
    width: 8.5%;
    height: 50%;
    float: right;
    background-color: black;
    margin-top: 0.28rem;
    margin-right: 0.3rem;
  }
  /* “+”添加符号 */
 .Conter_4{
      width: 100%;
      height: 8.82rem;
      float: left;
    }
    .Conter_div4_1{
      float: left;
      width: 100%;
      height: 0.9rem;
      background-color: #f7eabd;
      line-height: 0.83rem;
    }
    /* 内容提示词框 */
  .Conter_Div4_span{
    float: left;
    font-size: 0.3rem;
    font-weight:  bold;
    margin-left: 0.35rem;
  }
  /* 提示词 */
  .bj_imgcha{
    float: right;
    width: 0.46rem;
    height: 0.46rem;
    margin-top: 0.2rem;
    margin-right: 0.4rem; 
  }
  /* 关闭图片“×” */
  .Conter_div4_2{
    width: 90%;
    height: 1.2rem;
    border-bottom:1px solid #818181;
    float: right;
    line-height: 1.2rem;
    margin-right:0.3rem;
    margin-top:0.1rem;
  }
  /* 第一个拨号信息 */
  .pic_bgc1 img{
    width: 70%;
    height: 70%;
  }
  .pic_bgc1{
    width: 0.9rem;
    height: 0.9rem;
    background-color:#b38eff;
    text-align: center;
    line-height: 0.9rem;
    border-radius: 5%;
    margin-top:0.2rem;
    float: left;
  }
  /* 第一个联系信息图 */
  .pic_bgc1_san{
    float: left;
    font-size: 0.35rem;
    margin-left: 0.15rem;
  }
  /* 手机号1 */
  .Conter_div4_3{
    width: 90%;
    height: 1.2rem;
    border-bottom:1px solid #818181;
    float: right;
    line-height: 1.2rem;
    margin-right:0.3rem;
    margin-top:0.1rem;

  }
    /* 第二个拨号信息 */
    .pic_bgc2 img{
    width: 70%;
    height: 70%;
  }
  .pic_bgc2{
    width: 0.9rem;
    height: 0.9rem;
    background-color:#b38eff;
    text-align: center;
    line-height: 0.9rem;
    border-radius: 5%;
    margin-top:0.2rem;
    float: left;
    
  }
  /* 第二个联系信息图 */
  .Conter_div4_4{
    width: 90%;
    height: 1.2rem;
    border-bottom:1px solid #818181;
    float: right;
    line-height: 1.2rem;
    margin-right:0.3rem;
    margin-top:0.1rem;
  }
  .pic_bgc2_san{
    float: left;
    font-size: 0.35rem;
    margin-left: 0.15rem;
  }
  /* 手机号2 */
  /* 第三个拨号信息 */
  .pic_bgc3 img{
    width: 70%;
    height: 70%;
  }
  .pic_bgc3{
    width: 0.9rem;
    height: 0.9rem;
    background-color:#b38eff;
    text-align: center;
    line-height: 0.9rem;
    border-radius: 5%;
    margin-top:0.2rem;
    float: left;

  }
  /* 第三个联系信息图 */
.pic_bgc3_san{
    float: left;
    font-size: 0.35rem;
    margin-left: 0.15rem;
  }
  /* 手机号3 */

.footer_4{
        width: 100%;
        height: 1rem;
        background-color: white;
        float: left;
    }
    /* 底部盒子 */
    .list_4{
     float: left;
     width: 100%;
     height: 1rem;  
     border-top: 1px solid black; 
     margin-top: 1.9rem;
    }
    /* ul */
    .list_4 li{
        list-style: none;
        text-align: center;
        line-height: 1rem;
        float: left;
        font-size: 0.25rem;
         margin-top: 0.1rem;
        margin-left: 0.2rem
    }
    .list_4_li1{
          float: left;
        width: 1.6rem;
    }
    .list_4_li2{
        float: left;
        width: 1.6rem;

    text-align: center;
    line-height: 1rem;     
    }
    .list_4_li3{
        float: left;
        width: 1.6rem;
    text-align: center;
    line-height: 1rem;     
    }
    .list_4_li4{
        float: left;
        width: 1.6rem;
    text-align: center;
    line-height: 1rem;       
    }
    /* 每一个li 保险箱 */
    .fase1{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }
     .fase2{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }

    /* 保险箱图片 */
    .bxx4{
        float: left;
        clear: both;
    }
    .bxx4{
        float: left;
        clear: both;
         text-decoration: none;
        color:#818181;
        margin-top: -0.28rem;
        margin-left: 0.4rem;
    }
    /* 保险箱字 */
       .list4_li1{
          float: left;
        width: 1.6rem;
    }
    .list4_li2{
        float: left;
        width: 1.6rem;
    /* margin-left: 0.66rem;    */
    text-align: center;
    line-height: 1rem;     
    }
    .list4_li3{
        float: left;
        width: 1.6rem;
    /* margin-left: 0.66rem;     */
    text-align: center;
    line-height: 1rem;     
    }
    .list4_li4{
        float: left;
        width: 1.6rem;
    /* margin-left: 0.66rem;   */
    text-align: center;
    line-height: 1rem;       
    }
    .Opendoor1{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5em;
    margin-top: 0.09rem;
    }
    .Opendoor2{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }
    /* 开门记录图 */
    .kmjl{
        float: left;
        clear: both;
    }
    /* 点击路由盒子 */
    .kmjl4{
        float: left;
        clear: both;
        margin-left: 0.28rem;   
        margin-top: -0.28rem;
         text-decoration: none;
        color:#818181;
    }
    /* 开门记录 */
     .Callthepolice1{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }
    .Callthepolice2{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }
    /* 报警记录图 */
     .bjjl{
        float: left;
        clear: both;
    }
    .bjjl4{
         float: left;
        clear: both;
        margin-top: -0.28rem;
        margin-left: 0.28rem;
        text-decoration: none;
        color:#818181;
    }
    /* 报警记录字 */
     .glyh{
        float: left;
        clear: both;
     
    }
    .glyh4{
           float: left;
        clear: both;
        margin-top: -0.28rem;
        margin-left: 0.28rem;
        text-decoration: none;
        color:#0090ff;
    }
    /* 关联用户 */
    .Relation1{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }
    .Relation2{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }
    /* 关联用户 */
    .bj{
      width: 7.5rem;
      height: 0.83rem;
      line-height: 0.83rem;
      float: left;
      background-color: #f7eabd;
    }
  
</style>
