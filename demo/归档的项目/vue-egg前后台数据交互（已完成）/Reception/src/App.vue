<template>
  <div id="app">
    <div>
      <router-view v-if="alive" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      alive: true
    };
  },
  methods: {
    reload() {
      this.alive = false;
      this.$nextTick(() => {
        this.alive = true;
      });
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
