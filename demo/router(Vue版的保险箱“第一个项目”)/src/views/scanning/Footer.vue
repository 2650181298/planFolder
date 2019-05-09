<template>
    <div id="tree">
        <!-- 保险箱logo -->
        <img src="../../../photo/ico@2x.png" alt="" id="jpg">
        <!-- 添加保险箱字体 -->
        <span id="add">添加保险箱</span>
        <!-- 扫一扫添加保险箱字体 -->
        <span id="scan">扫一扫保险箱二维码即可自动添加保险箱</span>
        <!-- 扫描二维码 -->
        <div id="big">
        <router-link to="/scan" id="scanning">扫描二维码添加</router-link>
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
/* 大盒子 */
#tree{
    width: 100%;
}
/* 保险箱LOGO样式 */
#jpg{
    width: 2.42rem;
    height: 2.44rem;
    margin-left:2.05rem;
    position: absolute;
    margin-top: 1.77rem;
}
/* 添加保险箱字体样式 */
#add{
    font-size: 0.44rem;
    margin-left:2.15rem;
    position: absolute;
    margin-top: 4.5rem;
}
/* 扫一扫添加保险箱字体样式 */
#scan{
    color: #999999;
    font-size: 0.3rem;
    margin-left:0.55rem;
    position: absolute;
    margin-top: 5.2rem;
}
/* 小盒子 */
#big{
    width: 2.5rem;
    margin-left: 2rem;
    position: absolute;
    top: 9rem;
}
/* 扫描二维码添加样式 */
#scanning{
    text-decoration: none;
    font-size: 0.34rem;
    color: #0091ff;
}
</style>
