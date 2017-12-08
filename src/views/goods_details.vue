<template>
  <div class="index">
    <div class="empty-hint" v-if="showEmpty">查无此商品</div>
    <div class="rent-window" v-show="isOpen">
      <div class="inner-window">
        <span class="iconfont icon-close close fr" @click="closeWindow()"></span>
        <p class="sub-title">租期选择</p>
        <div class="durations">
          <p class="duration" :class="{ 'active': currentDurationIndex == index }" v-for="(item,index) in durations" :key="item" @click="pickDuration(index)">{{item}}</p>
        </div>
        <p class="sub-title">租金计算</p>
        <p class="result-price">{{rentType}}￥{{resultPrice}}</p>
        <p class="price-hint">（另需支付保证金
          <span class="hint-strong">￥300</span>元）</p>
        <p class="inquire-button">在线咨询</p>
        <p class="statement">*租金计算仅供参考，租期到期后退还保证金，详情请咨询客服</p>
        <!-- <p class="statement">*允典红木租赁条例</p> -->
      </div>
    </div>
    <!-- banner -->
    <div v-if="!showEmpty">
      <swiper class="banner" :options="bannerOption" v-if="banner.length>0">
        <div class="left mask"></div>
        <div class="right mask"></div>
        <!-- slides -->
        <swiper-slide v-for="item in banner" :key="item.goods_image" style="">
          <div class="link">
            <img :src="item.goods_image">
          </div>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev">
          <div class="button">
            <span class="iconfont icon-arrow-back"></span>
          </div>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <div class="button">
            <span class="iconfont icon-arrow-forward"></span>
          </div>
        </div>
      </swiper>
      <div class="details">
        <div class="oh">
          <p class="series-box fl">
            <span class="series">{{goods.gc_name}}</span>
            <span class="tags">{{goods.goods_jingle}}</span>
          </p>
          <p class="favour-box fr" :class=" {'active' : favourited}" @click="favourite(goods.goods_id)">
            <span class="iconfont icon-fav-full"></span>
          </p>
        </div>
        <div class="title">{{goods.goods_name}}</div>
        <p class="price">
          <span class="unit">￥</span>{{goods.goods_price}}</p>
        <div class="button-group">
          <div class="left-button fl" @click="goTmall(goods.tmall_url)">立即购买</div>
          <div v-if="isRent" class="right-button fl" @click="openWindow()">我要租赁</div>
        </div>
      </div>
      <div class="content-gap"></div>
      <div class="details-title">
        <span class="item-details">商品详情</span>
        <span class="iconfont icon-point-down"></span>
      </div>
      <div class="details-body" v-html="goods.goods_body"></div>
      <div class="content-gap"></div>
    </div>
    <loading v-if="loading"></loading>
    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>

<script>
import Loading from "../components/loading";
import appFooter from "../components/footer";
export default {
  name: "goodsDetails",
  data() {
    return {
      banner: [],
      bannerOption: {
        speed: 300,
        slidesPerView: "auto",
        loop: true,
        loopedSlides: 1,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next"
      },
      goods: {},
      isRent: 0,
      favourited: false,
      durations: ["7天", "15天", "30天", "≥6个月"],
      rateList: [0.06, 0.08, 0.12, 0.03],
      currentDurationIndex: 0,
      currentRate: 0.06,
      isOpen: false,
      showEmpty: false,
      loading: true
    };
  },
  created() {},
  activated: function() {
    window.scrollTo(0, 0);
    var id = this.$route.params.id;
    this.init(id);
  },
  computed: {
    resultPrice() {
      return (this.goods.goods_price * this.currentRate).toFixed(2);
    },
    rentType() {
      if (this.currentDurationIndex == 3) {
        return "月租金：";
      } else {
        return "总租金：";
      }
    }
  },
  methods: {
    init(id) {
      this.isOpen = false;
      this.loading = true;
      this.$http
        .get(this.$URL + "wap/goods/goods-info/" + id)
        .then(response => {
          if (response.status == 200 && response.data.code == 0) {
            this.banner = response.data.data.images;
            this.goods = response.data.data;
            this.isRent = response.data.data.is_rent;
            this.checkFavourited(this.goods.goods_id);
            this.bannerOption.loopedSlides = this.goods.length;
            this.showEmpty = false;
          }
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.showEmpty = true;
          console.log(err);
        });
    },
    checkFavourited(id) {
      var storage = localStorage.getItem("goodsID");
      var favourArr;
      if (storage) {
        favourArr = localStorage.getItem("goodsID").split(",");
        if (favourArr.indexOf(id + "") != -1) {
          this.favourited = true;
        } else {
          this.favourited = false;
        }
      } else {
        this.favourited = false;
      }
    },
    pickDuration(index) {
      this.currentDurationIndex = index;
      this.currentRate = this.rateList[index];
    },
    closeWindow() {
      this.isOpen = false;
    },
    openWindow() {
      this.isOpen = true;
    },
    goTmall(url) {
      if (url == "" || url == null) {
        return;
      } else {
        window.location.href = "url";
      }
    },
    favourite(id) {
      var storage = localStorage.getItem("goodsID");
      console.log(storage);
      var favourArr = [];
      if (storage) {
        favourArr = localStorage.getItem("goodsID").split(",");
        if (favourArr.indexOf(id + "") != -1) {
          favourArr = favourArr.filter(function(e) {
            return e != id;
          });
          this.favourited = false;
        } else {
          favourArr.push(id);
          this.favourited = true;
        }
        localStorage.setItem("goodsID", favourArr);
      } else {
        favourArr.push(id);
        this.favourited = true;
        localStorage.setItem("goodsID", favourArr);
      }
    }
  },
  components: { appFooter, Loading },
  watch: {
    $route(to, from) {
      console.log(from.fullPath.indexOf("goodsDetails"));
      if (
        from.fullPath.indexOf("goodsDetails") != -1 &&
        to.fullPath.indexOf("goodsDetails") != -1
      ) {
        console.log(111);
        this.init(to.params.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin slide-button {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

@mixin swiper-button {
  position: absolute;
  z-index: 3;
  top: 0;
  margin-top: 0;
  width: 5rem;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
}

@mixin round-corner-button {
  height: 4rem;
  box-sizing: border-box;
  border-radius: 4rem;
  font-size: 1.4rem;
  text-align: center;
  line-height: 4rem;
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
.content-gap {
  background-color: #f0f0f0;
  height: 1rem;
  width: 100%;
}
.iconfont {
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
}
.icon-fav-full {
  color: white;
}
.icon-point-down {
  color: #444444;
  font-size: 1.3rem;
  margin-left: 1.1rem;
}
.empty-hint {
  font-size: 2rem;
  color: #333;
  line-height: 15rem;
  height: 35rem;
  text-align: center;
}
.rent-window {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 10;
  .inner-window {
    width: 31.5rem;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem 2.3rem 2.5rem;
    box-sizing: border-box;
    .iconfont.close {
      display: block;
      position: absolute;
      width: 1rem;
      height: 1rem;
      right: 1.3rem;
      top: 1.3rem;
      font-size: 1rem;
      color: #444;
    }
    .sub-title {
      font-size: 1.2rem;
      color: #434343;
    }
    .durations {
      overflow: hidden;
      margin-bottom: 2rem;
      .duration {
        border: 1px solid rgba(153, 153, 153, 0.8);
        border-radius: 0.3rem;
        box-sizing: border-box;
        width: 6.9rem;
        height: 3.5rem;
        float: left;
        margin-right: 3rem;
        margin-top: 1.5rem;
        font-size: 1.4rem;
        color: #434343;
        text-align: center;
        line-height: 3.5rem;
        &:nth-child(3n) {
          margin-right: 0;
        }
        &.active {
          background: #d2b17e;
          color: #ffffff;
          border: none;
        }
      }
    }
    .result-price {
      margin-top: 1.5rem;
      font-weight: bold;
      font-size: 1.4rem;
      color: #333333;
      text-align: center;
      margin-bottom: 0.6rem;
    }
    .price-hint {
      text-align: center;
      font-size: 1.1rem;
      color: #666666;
      margin-bottom: 2rem;
      .hint-strong {
        color: rgb(208, 56, 58);
      }
    }
    .inquire-button {
      width: 22rem;
      height: 4rem;
      background-image: linear-gradient(-90deg, #000000 0%, #434343 100%);
      border-radius: 4rem;
      font-size: 1.4rem;
      color: #ffffff;
      line-height: 4rem;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 1.5rem;
    }
    .statement {
      font-size: 1.1rem;
      color: #999999;
      margin-bottom: 0.5rem;
    }
  }
}

.banner {
  width: 100%;
  position: relative;
  .link {
    display: block;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 28rem;
    }
  }
}
.swiper-container {
  padding: 0 5rem;
  box-sizing: border-box;
  position: relative;
  .swiper-button-prev {
    left: 0;
    @include swiper-button;
    .button {
      right: -2rem;
      @include slide-button;
    }
  }
  .swiper-button-next {
    right: 0;
    @include swiper-button;
    .button {
      left: -2rem;
      @include slide-button;
    }
  }
}

.details {
  padding: 2rem 1.5rem;
  .series-box {
    display: flex;
    align-items: center;
    height: 2rem;
    .series {
      font-size: 1.4rem;
      color: #c8a165;
    }
    .tags {
      font-size: 1rem;
      color: #666;
      margin-left: 0.8rem;
    }
  }
  .favour-box {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 0.2rem;
    background-color: #c0c0c0;
    &.active {
      background-color: #c8a165;
    }
  }
  .title {
    font-size: 1.8rem;
    color: #434343;
    letter-spacing: 0.04rem;
    line-height: 2.2rem;
    font-weight: bold;
    width: 30rem;
    margin-top: 1.4rem;
  }
  .price {
    font-size: 1.8rem;
    color: #434343;
    line-height: 2.1rem;
    height: 2.1rem;
    margin-top: 1.5rem;
    .unit {
      font-size: 1.4rem;
    }
  }
  .button-group {
    margin: 3.6rem 2.3rem 0;
    overflow: hidden;
    .left-button {
      @include round-corner-button;
      background-image: linear-gradient(-90deg, #000000 0%, #434343 100%);
      width: 15rem;
      color: #ffffff !important;
      a {
        color: #ffffff !important;
      }
    }
    .right-button {
      @include round-corner-button;
      width: 11.5rem;
      background: #ffffff;
      border: 1px solid rgba(153, 153, 153, 0.8);
      color: #434343;
      margin-left: 3.4rem;
    }
  }
}

.details-title {
  height: 7.2rem;
  width: 100%;
  text-align: center;
  line-height: 7.2rem;
  .item-details {
    font-size: 1.6rem;
    color: #434343;
  }
}
</style>
<style lang="scss">
.details-body {
  width: 100%;
  overflow: hidden;
  img {
    width: 100% !important;
  }
}
</style>
