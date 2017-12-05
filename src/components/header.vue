<template>
  <div class="header">
    <div id="header">
      <div class="left-icon">
        <i class="iconfont icon-menu"></i>
        <i class="icon-tmall"></i>
      </div>
      <div class="logo">
        <img src="../assets/images/logo.png" alt="">
      </div>
      <div class="right-icon">
        <i class="iconfont icon-search"></i>
        <i class="iconfont icon-fav"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {};
    }
  };

</script>

<style scoped lang="scss">
  @import '../assets/styles/mixin.scss';

  * {
    box-sizing: border-box;
  }

  .header {
    height: 4.4rem;
  }

  #header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 4.4rem;
    background-color: #fff;
    @include border(after, bottom, #ddd);

    .left-icon,.right-icon {
      display: flex;
      flex: 0 0 8.2rem;
      width: 8.2rem;
      height: 4.4rem;
      padding: 0 0.5rem;
      .iconfont {
        flex: 1;
        width: 3.6rem;
        height: 4.4rem;
        color: #333;
        font-size: 1.6rem;
        line-height: 4.4rem;
        text-align: center;
      }
      .icon-tmall {
        flex: 1;
        width: 3.6rem;
        height: 4.4rem;
        background: url(../assets/images/t-mao.png) no-repeat center;
        background-size: 1.6rem;
      }
    }

    .logo {
      flex: auto;
      height: 4.4rem;
      text-align: center;
        line-height: 4.4rem;
      img {
        display: inline;
        height: 2.8rem;
        vertical-align: middle;
      }
    }
  }

</style>
