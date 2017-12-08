<template>
  <div class="footer">
    <div class="top-content">
      <img class="logo" src="../assets/images/yd-logo.png" />
      <div class="code-box">
        <img src="../assets/images/code.png" class="code-img" />
        <p class="code-txt">微信公众号</p>
      </div>
    </div>
    <div class="middle-content">
      <div class="fl oh">
        <p>
          <span class="iconfont icon-addr"></span>上海市长宁区古北路786号</p>
        <p>
          <span class="iconfont icon-fax"></span>4000-597-365</p>
      </div>
      <div class="fr oh">
        <p>
          <span class="iconfont icon-addr"></span>021-64972266</p>
        <p>
          <span class="iconfont icon-fax"></span>service@iydjj.com</p>
      </div>
    </div>
    <div class="iso-line"></div>
    <div class="copy-box oh">
      <p class="copyright fl">© 2015 沪ICP备12006430号-1</p>
      <p class="copyright fr">沪公网安备31011202001660号</p>
    </div>

    <!-- goTop -->
    <transition name="fade">
    <div class="goTop iconfont icon-arrow-up" v-if="isShowBtn" @click="scrollTop"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      isShowBtn: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.throttle(this.checkScroll, 100))
  },
  methods: {
    checkScroll() {
      if (document.body.scrollTop > document.body.offsetHeight) {
        this.isShowBtn = true;
      } else {
        this.isShowBtn = false;
      }
    },
    scrollTop() {
      var timer = setInterval(function() {
        if (document.body.scrollTop == 0) {
          clearInterval(timer)
        } else {
          window.scrollTo(0, document.body.scrollTop - 60)
        }
      }, 10)
    },
    throttle(fn, delay) {
      var previous = null;
      return function () {
        var now = +new Date();
        if (!previous || now - previous > delay) {
          fn();
          previous = now;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.iconfont {
  color: white;
  font-size: 1rem !important;
  margin-right: 0.8rem;
}
.oh {
  overflow: hidden;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.footer {
  width: 100%;
  background-color: #222;
  padding: 2rem 1.5rem 1rem;
  box-sizing: border-box;
  .top-content {
    overflow: hidden;
    .logo {
      width: 4.5rem;
      height: 1.9rem;
      float: left;
    }
    .code-box {
      float: right;
      margin-right: 0.9rem;
      .code-img {
        width: 4rem;
        height: 4rem;
      }
      .code-txt {
        font-size: 0.8rem;
        color: #ffffff;
        line-height: 1rem;
      }
    }
  }
  .middle-content {
    margin-top: 2.7rem;
    overflow: hidden;
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.2rem;
    p {
      margin-bottom: 1rem;
    }
  }
  .iso-line {
    margin-top: 0.7rem;
    background: #393a3b;
    width: 100%;
    height: 1px;
  }
  .copy-box {
    .copyright {
      opacity: 0.6;
      font-size: 1rem;
      color: #cccccc;
      letter-spacing: 0.04rem;
      line-height: 2rem;
      margin-right: 1rem;
      margin-top: 1rem; 
    }
  }
}
.goTop {
  position: fixed;
  right: 0;
  bottom: 23rem;
  width: 3.2rem;
  height: 3.2rem;
  color: #fff;
  font-size: 1rem !important;
  line-height: 3.2rem;
  text-align: center;
  margin-right: 0;
  background: #C8A165;
  z-index: 2;
}
</style>
