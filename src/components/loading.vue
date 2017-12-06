<template>
  <div class="loading" @touchmove.prevent>
      <img class="svg" src="../assets/images/oval.svg">
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 4.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
  z-index: 99;
  .svg {
      font-size: 8rem;
  }
}
</style>
