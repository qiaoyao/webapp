<template>
  <div id="app">
    <app-header v-show="showHeader"></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-footer v-show="showFooter"></app-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  components: { appHeader, appFooter },
  computed: {
    ...mapGetters(["showHeader", "showFooter"])
  }
};
</script>

<style lang="scss">

</style>
