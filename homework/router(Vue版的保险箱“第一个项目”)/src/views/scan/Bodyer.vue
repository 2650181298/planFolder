<template>
<!-- 返回栏盒子 -->
    <div id="two_one_one">
        <!-- 返回箭头 -->
        <router-link to="/scanning"><a href=""><img src="../../../photo/Return@2x.png" alt=""></a></router-link>
        <!-- 扫一扫 -->
        <span>扫一扫</span>
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
/* 返回栏盒子样式 */
#two_one_one{
    width: 100%;
    height: 0.88rem;
    background-color: black;
}
/* 返回箭头样式 */
#two_one_one img{
    width: 3%;
    position: absolute;
    float: left;
    margin-top: 0.29rem;
    margin-left: 0.2rem;
}
/* 扫一扫字体样式 */
#two_one_one span{
    color: white;
    font-size: 0.29rem;
    position: absolute;
    float: left;
    margin-top: 0.29rem;
    margin-left: 2.69rem;

}
</style>
