<template>
    <div id="tree">
        <!-- 添加文字保险箱信息 -->
        <span class="information">保险箱信息</span>
        <!-- 保险箱品牌 -->
        <span class="brand">保险箱品牌：三星</span>
        <!-- 保险箱序列号 -->
        <span class="serialnumber">保险箱序列号：12335566hdhhjasdj</span>
        <!-- 保险箱IP -->
        <span class="IP">保险箱IP：192.168.1.1</span>
        <form action="">
        <!-- 输入保险箱名称的文本框 -->
        <input type="text" placeholder="请输入保险箱名称"  id="textcolor">
        <!-- 添加保险箱按钮 -->
        <router-link to="/PhonePage_head"><a href="" id="addbtn"  @click="btn">添加保险箱</a></router-link>
        </form>
        </div>
</template>
<script>
export default {
    name:'tree',
    data(){
        return{
           
        }
    },
    methods:{  
        btn(){
                confirm("是否要添加保险箱")
        } 
    }
}
</script>
<style>
/* 通配符 */
*{
    margin: 0;
    padding: 0;
}
#tree{
    background-color: #17181a;
}
/* 保险箱信息样式 */
.information{
    color: white;
    font-size: 0.44rem;
    margin-left: 1.7rem;
    position: absolute;
    top:2.5rem;
}
/* 保险箱品牌样式 */
.brand{
    color:#999999;
    font-size: 0.25rem;
    margin-left: 1.8rem;
    position: absolute;
    top: 4.49rem;
}
/* 保险箱序列号样式 */
.serialnumber{
    color:#999999;
    font-size: 0.25rem;
    margin-left: 0.8rem;
    position: absolute;
    top: 5rem;
}
/* 保险箱IP样式 */
.IP{
    color:#999999;
    font-size: 0.25rem;
    margin-left: 1.57rem;
    position: absolute;
    top: 5.5rem;
}
/* 保险箱IP文本框 */
#textcolor{
    background-color: #17181a;
    color: #999999;
    width: 5.20rem;
    height: 0.78rem;
    text-align: center;
    font-size: 0.26rem;
    margin-left: 0.2rem;
    border: 2px solid #17181a;
    border-bottom: 1px solid #999999;
    position: absolute;
    top: 6.5rem;
}
/* 添加保险箱名称 */
#addbtn{
    background-color: #0091ff;
    border: 1px solid #0091ff;
    width: 5.5rem;
    height: 0.98rem;
    font-size: 0.32rem;
    color: white;
    text-align: center;
    line-height: 0.98rem;
    letter-spacing:0.07rem;
    /* margin-left: 0.45rem; */
    position: absolute;
    top: 8.5rem;
    text-decoration: none;
}
</style>
