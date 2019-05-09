<template>
  <div id="about">
    <div class="Catalog">
      <img src="../assets/状态栏@2x.png" alt="" class="state">
      <img src="../assets/Return@2x.png" alt="" class="Return_4">
      <span class="Open_door">开门记录</span>
    </div>
    <div class="content_two_two_two">
      <div class="Open_door_one">
        <div class="lock_one">
          <img src="../assets/lock@2x.png" alt="" class="lock">
        </div>
        <span class="door_name">开门</span>
        <span class="door_time">1分钟前</span>
        <span class="place">幻想乡</span>
      </div>
      <div class="Open_door_two">
        <div class="lock_two">
          <img src="../assets/lock@2x.png" alt="" class="lock">
        </div>
        <span class="door_name">开门</span>
        <span class="door_time">1天前</span>
        <span class="place">幻想乡</span>
      </div>
      <div class="Open_door_three">
        <div class="lock_three">
          <img src="../assets/lock@2x.png" alt="" class="lock">
        </div>
        <span class="door_name">开门</span>
        <span class="door_time">1天前</span>
        <span class="place">幻想乡</span>
      </div>
      <div class="Open_door_four">
        <div class="lock_four">
          <img src="../assets/lock@2x.png" alt="" class="lock">
        </div>
        <span class="door_name">开门</span>
        <span class="door_time">18天前</span>
        <span class="place">幻想乡</span>
      </div>
    </div>
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
                 <img src="../assets/Opendoor2.png" alt="" class="Opendoor2">
                
               <span class="kmjl_4"> 开门记录</span>
                </router-link>
            </li>
            <li class="list4_li3">
                <router-link to="/Alarm_Record" class="bjjl">
                <img src="../assets/Callthepolice1.png" alt="" class="Callthepolice2">
                <span class="bjjl4">报警记录</span>
                </router-link>
            </li>
            <li class="list4_li4">
                 <router-link to="/Associated_User"  class="glyh">
            <img src="../assets/Relation1.png" alt="" class="Relation2">
            <span class="glyh_4">关联用户</span>
            </router-link>
            </li>
        </ul>
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
  /* 最外层盒子 */
  #about{
    width: 7.50rem;

    height: 13.34rem;
  }





  /* 内容部分 */
  .content_two_two_two{
    width: 7.50rem;
    height: 8.8rem;
  }
  /* 开门的四个框 */
  .Open_door_one{
    width: 6.9rem;
    height: 1.4rem;
    margin: 0 auto;
    border-bottom: 1px solid #e6e6e6;
  }
  .Open_door_two{
    width: 6.9rem;
    height: 1.4rem;
    margin: 0 auto;
    border-bottom: 1px solid #e6e6e6;
  }
  .Open_door_three{
    width: 6.9rem;
    height: 1.4rem;
    margin: 0 auto;
    border-bottom: 1px solid #e6e6e6;
  }
  .Open_door_four{
    width: 6.9rem;
    height: 1.4rem;
    margin: 0 auto;
    border-bottom: 1px solid #e6e6e6;
  }
  /* 开门里面的四个锁 */
  .lock_one{
    width: 0.9rem;
    height: 0.9rem;
    background-color: #f7a41e;
    float: left;
    margin-top: 0.25rem;
    border-radius:3px;
  }
  .lock_two{
    width: 0.9rem;
    height: 0.9rem;
    background-color: #f7a41e;
    float: left;
    margin-top: 0.25rem;
    border-radius:3px;
  }
  .lock_three{
    width: 0.9rem;
    height: 0.9rem;
    background-color: #f7a41e;
    float: left;
    margin-top: 0.25rem;
    border-radius:3px;
  }
  .lock_four{
    width: 0.9rem;
    height: 0.9rem;
    background-color: #f7a41e;
    float: left;
    margin-top: 0.25rem;
    border-radius:3px;
  }
  /* 锁的图案 */
  .lock{
    width: 0.62rem;
    height: 0.62rem;
    float: left;
    margin-left: 0.14rem;
    margin-top: 0.14rem;
  }
  /*开门地点 */
  .place{
    font-size: 0.29rem;
    color: #999999;
    float: right;
    margin-top: 0.6rem;
  }
  /* 开门名 */
  .door_name{
    float: left;
    font-size: 0.3rem;
    margin-top: 0.33rem;
    margin-left: 0.19rem;
  }
  /* 开门时间 */
  .door_time{
    font-size: 0.25rem;
    float: left;
    color: #999999;
    margin-top: 0.83rem;
    margin-left: -0.6rem;
  }






  /* 目录 */
  .Catalog{
    width: 7.50rem;
    height: 1.28rem;
    background-color: rgb(0, 0, 0);
  }
  /* 返回 */
  .Return_4{
    width: 0.2rem;
    height: 0.35rem;
    position: absolute;
    left: 0.3rem;
    top: 0.66rem;
  }
  /* 状态栏 */
  .state{
    width: 7.5rem;
    float: left;
  }
  /* 开门记录 */
  .Open_door{
    font-size: 0.3rem;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 0.6rem;
    left: 3.12rem;
  }
  .kmjl_4{
    float: left;
        clear: both;
        margin-left: 0.28rem;   
        margin-top: -0.27rem;
         text-decoration: none;
        color:#0090ff;
  }
  /* 开门记录字体 */
   .glyh_4{
           float: left;
        clear: both;
        margin-top: -0.28rem;
        margin-left: 0.28rem;
        text-decoration: none;
        color:#818181;
    }
</style>