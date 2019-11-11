<template>
  <div>
    <!-- 登录 -->
    <div class="about">
      <div class="main">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <p class="userBox">
            <span>账号：</span>
            <input type="text" v-model="formData.username" placeholder="用户名" class="user" />
          </p>
          <p class="passBox">
            <span>密码：</span>
            <input type="password" v-model="formData.password" placeholder="密码" class="password" />
          </p>
          <input
            type="submit"
            value="登录"
            style="float:right;margin-right:30%;margin-top:2%;background:#01bff8;width:20%;height:30px;border:0px;color:white;"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import request from "../utils/request";
export default {
  data() {
    return {
      formData: {
        username: "",//用户名
        password: ""//密码
      }
    };
  },
  methods: {
    login() {
      request({
        url: "/login",
        method: "post",
        data: this.formData
      })
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            localStorage.setItem("token", res.token);
            this.$router.push("/index");
          } else {
            alert("登录失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.about {
  padding-top: 10%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/背景图.jpg");
}
.main {
  width: 35%;
  height: 40%;
  margin: auto;
  background: white;
  border-radius: 4%;
}
.userBox {
  padding-top: 6%;
  width: 70%;
  margin: 0 auto;
}
.passBox {
  padding-top: 6%;
  width: 70%;
  margin: 0 auto;
}
span {
  font-size: 14px;
  color: rgb(26, 155, 255);
}

.user {
  width: 80%;
  height: 27px;
}
.password {
  width: 80%;
  height: 27px;
}
.router {
  padding-top: 5%;
  text-align: center;
}
h2 {
  padding-top: 2%;
  text-align: center;
}
</style>


