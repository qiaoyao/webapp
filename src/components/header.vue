<template>
  <div class="header">
    <!-- header -->
    <div id="header">
      <div class="left-icon">
        <i class="iconfont" :class="{'icon-menu': !showDropMenu, 'icon-close': showDropMenu}" @click="showDropMenu=!showDropMenu"></i>
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
    <!-- menu -->
    <ul class="menu-list" v-if="showDropMenu">
      <li class="linkA">
        <router-link to="/index" tag="span" class="leveA">
          <span class="text">允典首页</span>
        </router-link>
      </li>
      <li class="linkB">
        <div class="leveA" @click="showStoreClass=!showStoreClass">
          <span class="text">允典产品</span>
          <i class="iconfont" :class="{'icon-arrow-down': !showStoreClass, 'icon-arrow-up': showStoreClass}"></i>
        </div>
        <dl class="leveB" v-if="showStoreClass" v-cloak>
          <router-link :to="'/goodsList/'+item.stc_id" tag="dd" class="linkB" v-for="item in storeClass" :key="item.stc_id">
            <span class="text">{{item.stc_name}}</span>
            <i class="iconfont icon-checked"></i>
          </router-link>
        </dl>
      </li>
      <li class="linkA">
        <router-link to="/a" tag="span" class="leveA">
          <span class="text">设计理念</span>
        </router-link>
      </li>
      <li class="linkA">
        <router-link to="/contact" tag="span" class="leveA">
          <span class="text">联系我们</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      storeClass: [],
      showDropMenu: false,
      showStoreClass: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http.get("wap/nav/store-class").then(response => {
        if (response.status == 200 && response.data.code == 0) {
          this.storeClass = response.data.data;
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.path) {
        this.showDropMenu = false;
        this.showStoreClass = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/mixin.scss";

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
  z-index: 8;

  .left-icon,
  .right-icon {
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

.menu-list {
  position: fixed;
  top: 4.4rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 8;

  .linkA {
    padding-left: 1.5rem;
    background-color: #222;
    .leveA {
      display: flex;
      height: 5.4rem;
      border-bottom: 1px solid transparent;
      box-sizing: content-box;
      .text {
        flex: 1;
        color: #c8a165;
        font-size: 1.3rem;
        line-height: 5.4rem;
      }
      &.router-link-active {
        border-bottom: 1px solid #c8a165;
      }
    }
  }

  .linkB {
    .leveA {
      display: flex;
      height: 5.4rem;
      padding-left: 1.5rem;
      box-sizing: content-box;
      background-color: #222;
      .text {
        flex: 1;
        color: #c8a165;
        font-size: 1.3rem;
        line-height: 5.4rem;
      }
      .iconfont {
        flex: 0 0 5rem;
        width: 5rem;
        height: 5.4rem;
        color: #c8a165;
        font-size: 1rem;
        line-height: 5.4rem;
        text-align: center;
      }
    }
    .leveB {
      display: block;
      padding-left: 1.5rem;
      background-color: #f6f6f6;
      .linkB {
        display: flex;
        height: 4rem;
        border-bottom: 1px solid transparent;
        box-sizing: content-box;
        .text {
          flex: 1;
          color: #c8a165;
          font-size: 1.3rem;
          line-height: 4rem;
        }
        .iconfont {
          display: none;
          flex: 0 0 5rem;
          width: 5rem;
          height: 4rem;
          color: #c8a165;
          font-size: 1.3rem;
          line-height: 4rem;
          text-align: center;
        }
        &.router-link-active {
          border-bottom: 1px solid #c8a165;
          .iconfont {
            display: block;
          }
        }
      }
    }
  }
}
</style>
