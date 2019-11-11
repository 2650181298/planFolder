<template>
  <!-- 注销 -->
  <div style="float:right">
    <button
      @click="logout"
      style="color:#ffffff;background:red;border:red;width:50px;margin-right:30px;"
    >注销</button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.setItem("token", "");
      location.reload();
    }
  }
};
</script>