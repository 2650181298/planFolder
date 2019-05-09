<template>
  <div id="status_bar">
      <img alt="Vue logo" src="../assets/状态栏@2x.png" class="state">
      <router-link to="/PhonePage_head"><img src="../assets/Return@2x.png" alt="" class="return"></router-link>
      <span class="My">我的</span>
      <img src="../assets/Headportrait@2x.png" alt="" class="head_portrait">
      <span class="Account_number">2154003540</span>
      <div class="notice">
        <span class="notice_message">通知消息</span>
        <img src="../assets/Returnblack@2x.png" alt="" class="return_black_one">
      </div>
      <div class="notice_two">
        <span class="notice_message_two">修改密码</span>
        <img src="../assets/Returnblack@2x.png" alt="" class="return_black_two">
      </div>
      <div class="notice_three">
        <span class="notice_message_three">意见反馈</span>
        <img src="../assets/Returnblack@2x.png" alt="" class="return_black_three">
      </div>
      <div class="notice_four">
        <span class="notice_message_four">关于</span>
        <img src="../assets/Returnblack@2x.png" alt="" class="return_black_four">
      </div>
      <router-link to='/login'><div class="drop_out">
        退出登录
      </div></router-link>
  </div>
</template>

<script>

</script>

<style>
  /* 通配符 */
  *{
    margin: 0;
    padding: 0;
  }
  /* 背景图片的大盒子 */
  #status_bar{
    width: 7.50rem;
    height: 13.34rem;
    background-image: url(../assets/PeachBlossomFairy@2x.png);
    object-fit:cover;
    background-size:100%;
  }
  /* 退出登录 */
  .drop_out{
    width: 100%;
    height: 1.1rem;
    background-color: rgba(185, 185, 185, 0.363);
    border-top: 1px solid rgba(255, 255, 255, 0.171);
    border-bottom: 1px solid rgba(255, 255, 255, 0.164);
    float: left;
    margin-top: 0.26rem;
    font-size: 0.29rem;
    text-align: center;
    line-height: 1.1rem;
    color: red;
  }
  /* 黑色小条1 */
  .return_black_one{
    width: 0.13rem;
    height: 0.22rem;
    position: absolute;
    top: 5.64rem;
    right: -0.7rem;
  }
  /* 黑色小条2 */
  .return_black_two{
    width: 0.13rem;
    height: 0.22rem;
    position: absolute;
    top: 6.7rem;
    right: -0.7rem;
  }
  /* 黑色小条3 */
  .return_black_three{
    width: 0.13rem;
    height: 0.22rem;
    position: absolute;
    top: 8.14rem;
    right: -0.7rem;
  }
  /* 黑色小条4 */
  .return_black_four{
    width: 0.13rem;
    height: 0.22rem;
    position: absolute;
    top: 9.26rem;
    right: -0.7rem;
  }
  /* 通知消息 */
  .notice_message{
    font-size: 0.28rem;
    float: left;
    margin-left: 0.32rem;
    margin-top: 0.42rem;
  }
  /* 修改密码 */
   .notice_message_two{
    font-size: 0.28rem;
    float: left;
    margin-left: 0.32rem;
    margin-top: 0.42rem;
  }
  /* 意见反馈 */
  .notice_message_three{
    font-size: 0.28rem;
    float: left;
    margin-left: 0.32rem;
    margin-top: 0.42rem;
  }
  /* 关于 */
  .notice_message_four{
    font-size: 0.28rem;
    float: left;
    margin-left: 0.32rem;
    margin-top: 0.42rem;
  }
  /* 通知消息 */
  .notice{
    width: 100%;
    height: 1.1rem;
    background-color: rgba(185, 185, 185, 0.363);
    border-top: 1px solid rgba(255, 255, 255, 0.171);
    border-bottom: 1px solid rgba(255, 255, 255, 0.164);
    float: left;
    margin-top: 4.1rem;
  }
  /* 修改密码 */
  .notice_two{
    width: 100%;
    height: 1.1rem;
    background-color: rgba(185, 185, 185, 0.363);
    border-bottom: 1px solid rgba(255, 255, 255, 0.164);
    float: left;
  }
  /* 意见反馈 */
  .notice_three{
    width: 100%;
    height: 1.1rem;
    background-color: rgba(185, 185, 185, 0.363);
    border-top: 1px solid rgba(255, 255, 255, 0.171);
    border-bottom: 1px solid rgba(255, 255, 255, 0.164);
    float: left;
    margin-top: 0.29rem;
  }
  /* 关于 */
  .notice_four{
    width: 100%;
    height: 1.1rem;
    background-color: rgba(185, 185, 185, 0.363);
    border-bottom: 1px solid rgba(255, 255, 255, 0.164);
    float: left;
  }
  /* 账号 */
  .Account_number{
    font-size: 0.24rem;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 3.72rem;
    left: 2.96rem;
  }
  /* 头像 */
  .head_portrait{
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 1.81rem;
    left: 2.95rem;
  }
  /* 我的 */
  .My{
    color:rgb(255, 255, 255);
    font-size: 0.29rem;
    position: absolute;
    top: 0.7rem;
    left: 3.45rem;
  }
  /* 返回 */
  .return{
    width: 0.2rem;
    height: 0.35rem;
    float: left;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
  }
  /* 状态栏 */
  .state{
    width: 100%;
    float: left;
  }
</style>