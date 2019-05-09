<template>
    <div id="tree_one_one_one">
        <!-- 保险箱详情 -->
        <!-- <a href="添加要跳转的链接"> --><div id="fouraa">
            <!-- 保险箱详情 -->
            <span>保险箱详情</span>
            <!-- 牛批保险箱字体 -->
            <span id="thesafe">牛批保险箱</span>
            <!-- 箭头 -->
            <img src="../../photo/jiantou.png" alt="" id="arrows">
        </div><!-- </a> -->
        <!-- 品牌信息 -->
        <div id="five">
            <!-- 品牌 -->
            <span id="brand">品牌</span>
            <!-- 三星爆炸品牌 -->
            <span id="samsung">三星</span>
        </div>
        <!-- 无名白条 -->
        <div id="six"></div>
        <!-- 序列号盒子 -->
        <div id="seven">
            <!-- 序列号 -->
            <span id="Theserialnumber">序列号</span>
            <!-- 序列号字符 -->
            <span id="number">gfrgr44fdfd5fd</span>
        </div>
        <!-- 设备IP盒子 -->
       <div id="eight">
           <!-- 设备IP文字 -->
            <span id="IP">设备IP</span>
            <!-- 设备IP字符 -->
            <span id="IPnumber">192.168.1.1</span>
       </div>
       <!-- 固态版本盒子 -->
       <div id="version">
           <!-- 固件版本 -->
           <span class="version">固件版本</span>
           <!-- 固件版本号 -->
           <span class="versionnumber">V2.01245</span>
       </div>
       <!-- 连接状态盒子 -->
       <div id="stateeds">
           <!-- 链接状态文字 -->
           <span class="stateabs">连接状态</span>
           <!-- 链接状态 -->
           <span id="connection">已连接</span>
       </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
/* a标签样式 */
a{
    color: black;
    text-decoration: none;
}
/* 大盒子样式 */
#tree_one_one_one{
    width: 100%;
    height: 10.4rem;
    background-color:#f2f2f2;
    position: absolute;
    top: 1rem;
}
/* 保险箱详情盒子样式 */
#fouraa{
    width: 100%;
    height: 1.1rem;
    border-bottom: 1px solid #e6e6e6;
    background-color:white; 
    line-height: 0.65rem;
}
#fouraa:hover{
    background-color: #f2f2f2;
}
/* 保险箱详情字体样式 */
#fouraa span{
    font-size: 0.28rem;
    margin-left: 0.3rem;
}
/* 牛批保险箱字体样式 */
#thesafe{
    font-size: 0.28rem;
    position: absolute;
    left: 4rem;
    top: 0.25rem;    
}
/* 箭头样式 */
#arrows{
    width: 2%;
    position: absolute;
    left: 5.9rem;
    top: 0.46rem;    
}
/* 品牌信息盒子样式 */
#five{
    width: 100%;
    height: 1.1rem;
    background-color:white; 
    line-height: 0.65rem;
}
#five:hover{
    background-color: #f2f2f2;
}
/* 品牌样式 */
#brand{
    font-size: 0.28rem;
    margin-left: 0.3rem;
}
/* 三星爆炸品牌样式 */
#samsung{
    font-size: 0.28rem;
    margin-left: 4.6rem;
}
/* 无名白条样式 */
#six{
    width: 100%;
    height: 0.3rem;
    border-bottom: 1px solid #e6e6e6;
    background-color:#f2f2f2; 
    line-height: 0.65rem;
}
/* 序列号盒子样式 */
#seven{
    width: 100%;
    height: 1.1rem;
    background-color:white; 
    line-height: 0.65rem;
}
#seven:hover{
    background-color: #f2f2f2;
}
/* 序列号样式  */
#Theserialnumber{
    font-size: 0.28rem;
    margin-left: 0.3rem;
}
/* 序列号字符样式 */
#number{
    font-size: 0.28rem;
    margin-left:2.7rem;
    letter-spacing:0.04rem;
}
/* 设备IP盒子 */
#eight{
     width: 100%;
    height: 1.1rem;
    border-bottom: 1px solid #e6e6e6;
    background-color:white; 
    line-height: 0.65rem;
}
#eight:hover{
    background-color: #f2f2f2;
}
/* 设备IP文字样式 */
#IP{
    font-size: 0.28rem;
    margin-left: 0.3rem;
}
/* 设备字符IP样式 */
#IPnumber{
    font-size: 0.28rem;
    margin-left: 3.6rem;
}
/* 固态版本盒子 */
#version{
    width: 100%;
    height: 1.1rem;
    border-bottom: 1px solid #e6e6e6;
    background-color:white; 
    line-height: 0.65rem;
}
#version:hover{
    background-color: #f2f2f2;
}
/* 固件版本文字样式 */
.version{
    font-size: 0.28rem;
    margin-left: 0.3rem;
}
/* 版本号样式 */
.versionnumber{
    font-size: 0.28rem;
    margin-left: 3.5rem;
}
/* 链接状态盒子样式 */
#stateeds{
    width: 100%;
    height: 1.1rem;
    border-bottom: 1px solid #e6e6e6;
    background-color:white; 
    line-height: 0.65rem;
}
#stateeds:hover{
    background-color: #f2f2f2;
}
/* 连接状态文字样式 */
.stateabs{
    font-size: 0.28rem;
    margin-left: 0.3rem;
}
/* 链接状态样式 */
#connection{
    font-size: 0.28rem;
    margin-left: 3.8rem;
}
</style>