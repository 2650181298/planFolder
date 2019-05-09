<template>
  <!-- 报警记录 -->
    <div id="App_2">
<!-- <router-link to="/" >报警</router-link> -->
 <img src="../assets/状态栏.png" alt="" class="Status_Bar_3">
 <div class="header_box">
<img src="../assets/Return.png" alt="" class="Return_2">
<span class="bjjl_span">报警记录</span>
 </div>
<!-- header_box盒子 -->
<div class="Conter_Box">
  <div class="Conter_Div1">
    <div class="Div_Pic1">
      <img src="../assets/move.png" alt="" class="pic_1">
      </div>
      <!-- 包装图片背景颜色的盒子 -->
      <span class="Pic_Span1">有人移动保险箱</span>
      <span>{{time}}</span>
      <span class="Div_Span1">幻想乡</span>
  </div>
  <div class="Conter_Div2">
    <div class="Div_Pic2">
      <img src="../assets/Electricquantity.png" alt=""  class="pic_2">
    </div>
      <!-- 包装图片背景颜色的盒子 -->
      <span class="Pic_Span2">保险箱电量低于20%</span>
      <span>{{time}}</span>
  <span class="Div_Span2">幻想乡</span>
  </div>
  <div class="Conter_Div3">
    <div class="Div_Pic3">
      <img src="../assets/modify.png" alt=""  class="pic_3">
    </div>
      <!-- 包装图片背景颜色的盒子 -->
       <span class="Pic_Span3">修改配置</span>
      <span>{{time}}</span>
  <span class="Div_Span3">幻想乡</span>
  </div>
  <div class="Conter_Div4">
    <div class="Div_Pic4">
      <img src="../assets/Electricquantity.png" alt=""  class="pic_4">
    </div>
      <!-- 包装图片背景颜色的盒子 -->
       <span class="Pic_Span4">保险箱电量低于30%</span>
      <span>{{time}}</span>
   <span class="Div_Span4">幻想乡</span>     
  </div>
  <!-- Conter_Div1盒子 -->
</div>
<!-- Conter_Box盒子 -->
<div class="footer_3">
  <ul class="list_3">

    <li class="list_2_li1">
                
                <router-link to="/Bxx_state" class="bxx"> 
                <img src="../assets/fase1.png" alt="" class="fase2">

                <span class="bxx_2">保险箱</span>
                </router-link>
            </li>
            
            <li class="list_2_li2">
        
                <router-link to="/About_door" class="kmjl">
                 <img src="../assets/Opendoor1.png" alt="" class="Opendoor2">
                
               <span class="kmjl_2"> 开门记录</span>
                </router-link>
            </li>
             </li>
            <li class="list_2_li3">
                <router-link to="/Alarm_Record" class="bjjl">
                <img src="../assets/Callthepolice2.png" alt="" class="Callthepolice2">
                <span class="bjjl_2">报警记录</span>
                </router-link>
            </li>
            <li class="list_2_li4">
                 <router-link to="/Associated_User"  class="glyh">
            <img src="../assets/Relation1.png" alt="" class="Relation2">
            <span class="glyh_2">关联用户</span>
            </router-link>
            </li>
        </router-link>
  </ul>
</div>

    </div>
</template>
<script>
export default {
  
}
</script>
<style>
  #App_2{
    width: 7.5rem;
    height: 10rem;
    background: black
  }
  /* 大盒子 */
  .Status_Bar_3{
        width: 95%;
        float: left;
        margin-left: 0.15rem;
    }
    /* 状态栏 */
  .header_box{
    width: 100%;
    height: 1rem;
    float: left;
  }
  .Return_2{
     width: 0.26rem;
        height: 50%;
        margin-left: 0.3rem;
        margin-top: 0.3rem;
        float: left;
  }
  /* 弹出按钮< */
  .bjjl_span{
     float: left;
        font-size: 0.3rem;
        color: white;
        margin-left: 2.6rem;
        /* line-height: 0.9rem; */
        margin-top: 0.28rem;
        font-weight: bold;
  }
  /* 报警记录 */
  .Conter_Box{
    width:100%;
    height: 8.82rem;
    float: left;
    background-color: white;
  }
  /* conter_box内容盒子 */
  .Conter_Div1{
    width: 90%;
    height: 1.35rem;
    margin-left: 0.4rem;
    margin-top: 0.2rem;
    border-bottom:1px solid #e6e6e6;
    float: left;
  }
  /* 第一条内容盒子 */
  .Div_Pic1{
    width: 1.2rem;
    height: 1.2rem;
    background-color: #f72530;
    float: left;
    /* text-align: center;
    line-height: 1.2rem; */
  }
  /* 装图片背景颜色的盒子 */
  .pic_1{
    float: left;
    width: 1rem;
    height: 0.86rem;
    margin-left: 0.1rem;
    margin-top: 0.15rem;
  }
  /* 图片 */
  .Pic_Span1{
    float: left;
    font-size: 0.3rem;
    font-family: "黑体";
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
  /* 标题 */
  .Div_Span1{
    float: right;
    font-size: 0.25rem;
    margin-right: 0.2rem;
    margin-top:0.45rem;
    color:#cdcdcd;
  }
  /* 幻想乡 */
  .Conter_Div2{
    width: 90%;
    height: 1.35rem;
    margin-left: 0.4rem;
    margin-top: 0.2rem;
    border-bottom:1px solid #e6e6e6;
    float: left;
  }
    /* 第二条内容盒子 */
  .Div_Pic2{
    width: 1.2rem;
    height: 1.2rem;
    background-color: #f7ba11 ;
    /* text-align: center;
    line-height: 1.2rem; */

        float: left;
  }
    /* 装图片背景颜色的盒子 */
  .pic_2{
    margin-left: 0.35rem;
    margin-top: 0.25rem;
    float: left;
    width: 0.45rem;
    height: 0.65rem;
  }
    /* 图片 */
    .Pic_Span2{
    float: left;
    font-size: 0.3rem;
    font-family: "黑体";
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
  /* 标题 */
  .Div_Span2{
    float: right;
    font-size: 0.25rem;
    margin-right: 0.2rem;
    margin-top:0.45rem;
    color:#cdcdcd;
  }
  /* 幻想乡 */
  .Conter_Div3{
    width: 90%;
    height: 1.35rem;
    margin-left: 0.4rem;
    margin-top: 0.2rem;
    border-bottom:1px solid #e6e6e6;
    float: left;
  }
    /* 第三条内容盒子 */
    .Div_Pic3{
          float: left;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #f72530;
    /* text-align: center;
    line-height: 1.2rem; */
  }
    /* 装图片背景颜色的盒子 */
  .pic_3{
    float: left;
    width: 0.8rem;
    height: 0.7rem;
    margin-left: 0.25rem;
    margin-top: 0.25rem;
  }
    /* 图片 */
    .Pic_Span3{
    float: left;
    font-size: 0.3rem;
    font-family: "黑体";
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
  /* 标题 */
  .Div_Span3{
    float: right;
    font-size: 0.25rem;
    margin-right: 0.2rem;
    margin-top:0.45rem;
    color:#cdcdcd;
  }
  /* 幻想乡 */
  .Conter_Div4{
    width: 90%;
    height: 1.35rem;
    margin-left: 0.4rem;
    margin-top: 0.2rem;
    border-bottom:1px solid #e6e6e6;
    float: left;
  }
    /* 第四条内容盒子 */
    .Div_Pic4{
          float: left;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #f7ba11;
    /* text-align: center;
    line-height: 1.2rem; */
  }
    /* 装图片背景颜色的盒子 */
  .pic_4{
        float: left;
   width: 0.45rem;
    height: 0.65rem;
    margin-left: 0.35rem;
    margin-top: 0.25rem;
  }
  /* 图片 */
  .Pic_Span4{
    float: left;
    font-size: 0.3rem;
    font-family: "黑体";
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
  /* 标题 */
  .Div_Span4{
    float: right;
    font-size: 0.25rem;
    margin-right: 0.2rem;
    margin-top:0.45rem;
    color:#cdcdcd;
  }
  /* 幻想乡 */
  .footer_3{
     width: 100%;
        height: 1rem;
        background-color: white;
        float: left;
  }
  /* 底部盒子 */
    .list_3{
     float: left;
     width: 100%;
     height: 1rem;  
     border-top: 1px solid black; 
      font-size: 0.25rem;
    margin-top: 1.9rem;
    }
    .list_3 li{
        list-style: none;
        text-align: center;
        line-height: 1rem;
        float: left;
        font-size: 0.25rem;
        margin-top: 0.1rem;
        margin-left: 0.2rem
    }
    /* 每一个li 保险箱 */
    /* ul */
      .fase_2{
    width: 0.52rem;
    height: 0.52rem;
    float: left;
    margin-left: 0.5rem;
    margin-top: 0.09rem;
    }

    /* 保险箱图片 */
    .bxx_3{
      float: left;
      clear: both;
    }
     .bxx_2{
        float: left;
        clear: both;
         text-decoration: none;
         margin-top: -0.28rem;
        color:#818181;
        margin-left: 0.4rem;

    }
    /* 保险箱字 */
     .list_2_li1{
          float: left;
        width: 1.6rem;
    }
    .list_2_li2{
        float: left;
        width: 1.6rem;
    /* margin-left: 0.66rem;    */
    text-align: center;
    line-height: 1rem;     
    }
    .list_2_li3{
        float: left;
        width: 1.6rem;
    /* margin-left: 0.66rem;     */
    text-align: center;
    line-height: 1rem;     
    }
    .list_2_li4{
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
    margin-left: 0.5rem;
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
    .kmjl_2{
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
    .bjjl_2{
         float: left;
        clear: both;
        margin-top: -0.28rem;
        margin-left: 0.28rem;
        text-decoration: none;
        color:#0090ff;
    }
    /* 报警记录字 */
     .glyh{
        float: left;
        clear: both;
     
    }
    .glyh_2{
        float: left;
        clear: both;
        margin-top: -0.28rem;
        margin-left: 0.28rem;  
        text-decoration: none;
        color:#818181;
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
</style>


 
