<template>
  <div id="app">
    <app-header v-show="showHeader"></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import appHeader from "./components/header";

export default {
  name: "app",
  data() {
    return {};
  },
  created() {},
  methods: {
    init() {}
  },
  components: { appHeader },
  computed: {
    ...mapGetters(["showHeader"])
  }
};
</script>

<style lang="scss">

</style>
