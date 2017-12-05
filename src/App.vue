<template>
  <div id="app">
    <router-link to="/contact">123</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
