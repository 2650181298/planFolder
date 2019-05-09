<template>
    <div id="big_one">
        <!-- 顶部箭头返回键 -->
        <router-link to="/scanning"><img src="../../../photo/Return@2x.png" alt="" class="left_arrow1"></router-link>
        <!-- 添加保险箱 -->
        <span class="Add_safe1">添加保险箱</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
/* 顶部箭头样式 */
.left_arrow1{
    position: static;
    top: 0;
    left: 0;
    /* width: 8%; */
    height: 0.3rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.27rem;
}
/* 添加保险箱 */
.Add_safe1{
    color: white;
    font-size: 0.29rem;
    position: absolute;
    /* top: -8.45rem; */
    left: 0.5rem;
    float: left;
    margin-top: 0.24rem;
    margin-left: 2rem;
}
</style>
