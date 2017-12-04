<template>
  <div id="app">
    <router-link to="/contact">123</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      
    }
  },
  created() {},
  methods: {
    init() {}
  }
};
</script>

<style lang="scss">
#app {
  color: #f20;
  p {
    line-height: 2;
  }
}
</style>
