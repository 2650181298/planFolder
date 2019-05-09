<template>
  <!-- 智能保险箱状态 -->
  <div id="App">
    <img src="../assets/状态栏.png" alt class="Status_Bar">
    <!-- 状态 -->
    <div class="Action_Bar">
      <router-link to="/PhonePage_head"><img src="./pic/Return.png" alt class="Return"></router-link>
      <!-- 弹出 -->
      <span class="Title">智能保险箱</span>
      <!-- <router-link to="/datails"> -->
      <router-link to="/datails"><span class="details">详情</span></router-link>
      <!--  @click="header_xq" -->
      <!-- </router-link> -->
    </div>
    <!-- 操作栏 -->
    <div class="content_one">
      <img src="../assets/state.jpg" alt class="state_one">
      <!-- 状态图 -->
      <span class="Situation">
        &nbsp;安全情况
        <h4 class="security">{{security}}</h4>
      </span>
      <!-- 情况 -->
      <ul class="list">
        <li class="position">
          最后一次位置:
          <span>幻想乡</span>
        </li>
        <!-- 最后一次位置 -->
        <li>
          当前状态:
          <span>打开</span>
        </li>
        <!-- 当前状态 -->
      </ul>
      <!-- ul位置和状态 -->
    </div>
    <!-- 状态框 -->
    <div class="footerq">
      <div class="footer_content">
        <span class="Set_Up_1">灵敏度设置</span>
        <span class="Set_Up_2">灵敏度介绍</span>
        <!--
        <button id="Set_btn_1"  @click="Set_btn1" v-bind:style="[baseStyles]" >1</button>
        <button id="Set_btn_2 @click=""">2</button>
        <button id="Set_btn_3"  >3</button>
        <button id="Set_btn_4"  >4</button>
        -->
        <div class="box_btn">
          <button :class="item.style" @click="setBtn(index)" class="set_btn" v-for="item,index in level">{{item.text}}</button>
        </div>

        <span class="yiji">一级</span>
        <span class="erji">二级</span>
        <span class="sanji">三级</span>
        <span class="siji">四级</span>
      </div>
      <!-- 尾部内容 -->
    </div>
    <!-- 灵敏度设置白色框 -->
    <div class="footer_2">
      <ul class="list_2">
        <li class="list_2_li1">
          <router-link to="/Bxx_state" class="bxx">
            <img src="../assets/fase2.png" alt class="fase2">

            <span class="bxx2">保险箱</span>
          </router-link>
        </li>
        <li class="list_2_li2">
          <router-link to="/About_door" class="kmjl">
            <img src="../assets/Opendoor1.png" alt class="Opendoor2">

            <span class="kmjl2">开门记录</span>
          </router-link>
        </li>
        <li class="list_2_li3">
          <router-link to="/Alarm_Record" class="bjjl">
            <img src="../assets/Callthepolice1.png" alt class="Callthepolice2">
            <span class="bjjl2">报警记录</span>
          </router-link>
        </li>
        <li class="list_2_li4">
          <router-link to="/Associated_User" class="glyh">
            <img src="../assets/Relation1.png" alt class="Relation2">
            <span class="glyh2">关联用户</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 路由框 -->
  </div>
  <!-- App大框 -->
</template>

<script>
import fontsizeset from "../fontsizeset.js";
export default {
  name: "App",
  data() {
    return {
      security: "安全",
      level:[
          {style:"bg",text:1},
          {style:"",text:2},
          {style:"",text:3},
          {style:"",text:4},
      ],
    };
  },
  methods: {
    setBtn(i) {
        if(this.level[i].style == "bg"){
            this.level[i].style = ""
        }else{
            this.level[i].style = "bg"
        }
    }
  }
};
</script>
<style>
.bg{
    background-color: blue !important;
}
* {
  margin: 0;
  padding: 0;
}
#App {
  width: 7.5rem;
  height: 10rem;
  background-color: #0090ff;
}
.Status_Bar {
  width: 95%;
  float: left;
  margin-left: 0.15rem;
}
/* 状态栏 */
.Action_Bar {
  width: 7.5rem;
  height: 0.88rem;
  float: left;
}
/* 操作栏 */
.Return {
  width: 0.26rem;
  height: 50%;
  margin-left: 0.3rem;
  margin-top: 0.25rem;
  float: left;
}
/* 弹出按钮 */
.Title {
  float: left;
  font-size: 0.3rem;
  color: white;
  margin-left: 2.45rem;
  line-height: 0.88rem;
  font-weight: bold;
}
/* 标题智能保险箱 */
.details {
  float: right;
  font-size: 0.28rem;
  color: white;
  line-height: 0.88rem;
  margin-right: 0.29rem;
}
/* 详情 */
.state_one{
  width: 100%;
  float: left;
  margin-top: 0.2rem;
  margin-bottom: 0.9rem;
}
/* 状态图 */
.Situation {
  font-size: 0.3em;
  color: white;
  position: absolute;
  left: 3.05rem;
  top: 3.73rem;
}
/* 情况 */
.security {
  font-size: 0.72rem;
  color: white;
  margin-top: -0.08rem;
}
/* 安全 */
.list {
  float: left;
  width: 100%;
  height: 0.9rem;
}
/* ul */
.list li {
  float: left;
  width: 49.47%;
  height: 0.9rem;
  border-left: 1px solid #32a8ff;
  border-top: 1px solid #32a8ff;
  border-bottom: 1px solid #32a8ff;
  font-size: 0.27rem;
  color: white;
  list-style: none;
  text-align: center;
  line-height: 0.9rem;
}
/* 位置和状态 */
.footerq {
  width: 100%;
  height: 2.65rem;
  background-color: white;
  float: left;
}
/* 灵敏度大框 */
.content{
  width: 0;
}
.footer_content {
  width: 100%;
  float: left;
  margin-top: 0.7rem;
  height: 1.67rem;
  border: #0090ff;
}
.Set_Up_1 {
  float: left;
  margin-left: 0.2rem;
  font-size: 0.25rem;
  margin-top: 0.1rem;
      margin-right: 4rem;
}
.Set_Up_2 {
  float: right;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
  font-size: 0.25rem;
  color: #0090ff;
}
/* 灵敏度设置 */
.set_btn {
  width: 1.48rem;
  height: 0.53rem;
  float: left;
  border: none;
  margin-left: 0.02rem;
  background-color: #e0e4e7;
  margin-top: 0.07rem;
}
.box_btn{
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.7rem
}
.yiji {
  float: left;
  clear: both;
  font-size: 0.24rem;
  margin-left: 1.3rem;
}
/* 一级 */

.erji {
  float: left;
  font-size: 0.24rem;
  margin-left: 0.95rem;
}
/* 二级 */

.sanji {
  float: left;
  font-size: 0.24rem;
  margin-left: 1.05rem;
}
/* 三级 */

.siji {
  float: left;
  font-size: 0.24rem;
  margin-left: 1.07rem;
}
/* 四级 */
/* 灵敏度级别条 */
.footer_2 {
  width: 100%;
  height: 1rem;
  background-color: white;
  float: left;
}
/* 底部盒子 */
.list_2 {
  float: left;
  width: 100%;
  height: 1rem;
  border-top: 1px solid black;
  margin-top: 0.15rem
}
/* ul */
.list_2 li {
  list-style: none;
  text-align: center;
  line-height: 1rem;
  float: left;
  font-size: 0.25rem;
  margin-top: 0.1rem;
  margin-left: 0.2rem
}
/* 每一个li 保险箱 */
.fase1 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
.fase2 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}

/* 保险箱图片 */
.bxx {
  float: left;
  clear: both;
}
.bxx2 {
  float: left;
  clear: both;
  text-decoration: none;
  color: #0090ff;
  margin-top: -0.28rem;
  margin-left: 0.4rem;
}
/* 保险箱字 */
.list_2_li1 {
  float: left;
  width: 1.6rem;
}
.list_2_li2 {
  float: left;
  width: 1.6rem;
  /* margin-left: 0.66rem;    */
  text-align: center;
  line-height: 1rem;
}
.list_2_li3 {
  float: left;
  width: 1.6rem;
  /* margin-left: 0.66rem;     */
  text-align: center;
  line-height: 1rem;
}
.list_2_li4 {
  float: left;
  width: 1.6rem;
  /* margin-left: 0.66rem;   */
  text-align: center;
  line-height: 1rem;
}

.Opendoor1 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
.Opendoor2 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
/* 开门记录图 */
.kmjl {
  float: left;
  clear: both;
}
/* 点击路由盒子 */
.kmjl2 {
  float: left;
  clear: both;
  margin-left: 0.28rem;
  margin-top: -0.28rem;
  text-decoration: none;
  color: #818181;
}
/* 开门记录 */
.Callthepolice1 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
.Callthepolice2 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
/* 报警记录图 */
.bjjl {
  float: left;
  /* clear: both; */
}
.bjjl2 {
  float: left;
  clear: both;
  margin-top: -0.28rem;
  margin-left: 0.28rem;
  text-decoration: none;
  color: #818181;
}
/* 报警记录字 */
.glyh {
  float: left;
  clear: both;
}
.glyh2 {
  float: left;
  clear: both;
  margin-top: -0.28rem;
  margin-left: 0.28rem;
  text-decoration: none;
  color: #818181;
}
/* 关联用户 */
.Relation1 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
.Relation2 {
  width: 0.52rem;
  height: 0.52rem;
  float: left;
  margin-left: 0.5rem;
  margin-top: 0.09rem;
}
/* 关联用户 */
</style>
