<template>
  <div id="app">
    <app-header v-show="showHeader"></app-header>
    <div class="wrap">
    <keep-alive>
      <!-- <transition name="fadeInRight"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </keep-alive>
    </div>
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
.wrap {
  position: relative;
  width: 100%;
}
.wrap-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
// fade
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

// fadeInRight
.fadeInRight-enter-active, .fadeInRight-leave-active {
  transition: all .3s ease
}
.fadeInRight-enter {
  transform: translateX(100%);
}
.fadeInRight-leave-to {
  transform: translateX(-100%);
}
</style>
