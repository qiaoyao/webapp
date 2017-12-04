<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
    created() {
      this.init();
    },
    methods: {
      init () {
        console.log(this.$URL)
      }
    }
  };

</script>

<style lang="scss">
  #app {
    color: #f20;
    p {
      line-height: 2
    }
  }

</style>
