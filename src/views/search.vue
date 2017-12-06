<template>
  <div>search</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  created() {
    this.setShowHeader(false);
    this.setShowFooter(false);
  },
  methods: {
    ...mapMutations(["setShowHeader", "setShowFooter"])
  }
};
</script>

<style scoped lang="scss">

</style>
