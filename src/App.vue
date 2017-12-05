<template>
  <div id="app">
    <app-header></app-header>
    <router-link to="/contact">123</router-link>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "./components/header";
import appFooter from "./components/footer";

export default {
  name: "app",
  data() {
    return {};
  },
  created() {},
  methods: {
    init() {}
  },
  components: { appHeader, appFooter }
};
</script>

<style lang="scss">

</style>
