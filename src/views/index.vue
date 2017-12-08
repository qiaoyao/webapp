<template>
  <div class="index wrap-content">
    <!-- banner -->
    <swiper class="banner" :options="bannerOption" v-if="banner.length>0">
      <!-- slides -->
      <swiper-slide v-for="item in banner" :key="item.id">
        <a href="#" class="link">
          <img :src="item.banner_name">
        </a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <!-- products -->
    <div class="products">
      <div class="column-title">
          <h2>产品展示</h2>
          <p><i></i><span>Product</span><i></i></p>
      </div>

      <!-- product category -->
      <swiper class="product-category" :options="categoryOption" v-if="category.length>0" ref="mySwiper">
        <swiper-slide v-for="item in category" :key="item.stc_id">
          <router-link :to="'/goodsList/'+item.stc_id" tag="span" class="link">{{item.stc_name}}</router-link>
        </swiper-slide>
      </swiper>

      <!-- product goods -->
      <swiper class="product-goods" :options="goodsOption" v-if="goods.length>0">
        <swiper-slide class="item" v-for="item in goods" :key="item.goods_id">
          <router-link :to="'/goodsDetails/'+item.goods_id" tag="div" class="item-main">
            <div class="img">
              <img :src="item.goods_image">
            </div>
            <div class="desc">
              <p class="name">{{item.goods_name}}</p>
              <p class="price">￥{{item.goods_price}}</p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>

      <div class="link-btn">
        <router-link to="/goodsList" tag="span">查看更多...</router-link>
      </div>
    </div>

    <!-- about us -->
    <div class="aboutUS">
      <div class="about-img">
        <img src="../assets/images/about.png" alt="">
      </div>
      <h5 class="title">关于我们</h5>
      <h6 class="sub-title">About us</h6>
      <p class="info">允典红木创建于1993年，允典一直秉持自己对古典家居文化的理解，传承祖宗家居文化精髓，凝聚古今中外风格元素，融汇贯通，将艺术性、美观性与实用性巧妙结合，创制带有显著“允典”特质的家居文化。允典所提供的不仅是家具本身，更是一种思考，一种文化，一种生活方式，创造价值，创造经典，是允典人持之以恒不断追求，而对允典的选择也能成就您对极致生活的追求与梦想！</p>

      <div class="link-btn">
        <router-link to="/contact" tag="span" class="iconfont icon-arrow-right"></router-link>
      </div>
    </div>

    <!-- concept -->
    <div class="concept">
      <div class="column-title">
          <h2>设计理念</h2>
          <p>Design concept</p>
      </div>
      <ul class="concept-list" v-if="news.length>0">
        <router-link :to="'/news/'+item.id" tag="li" v-for="item in news" :key="item.id">
          <div class="link">
            <div class="concept-img">
              <img :src="item.cover">
            </div>
            <div class="concept-info">
              <div class="title">
                <h3>{{item.title}}</h3>
              </div>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </router-link>
      </ul>

      <div class="link-btn">
        <router-link to="/news" tag="span" class="iconfont icon-arrow-right"></router-link>
      </div>

    </div>

    <!-- footer -->
    <app-footer></app-footer>
    <!-- loading -->
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import appFooter from "../components/footer";
import Loading from "../components/loading";
export default {
  name: "index",
  data() {
    return {
      loading: true,
      banner: [],
      bannerOption: {
        speed: 300,
        autoplay: 5000,
        pagination: ".banner .swiper-pagination"
      },
      category: [],
      categoryOption: {
        freeMode: true,
        slidesPerView: "auto"
      },
      goods: [],
      goodsOption: {
        freeMode: true,
        slidesPerView: "auto"
      },
      news: []
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http.get(this.$URL + "wap/wap-index").then(response => {
        if (response.status == 200 && response.data.code == 0) {
          this.banner = response.data.data.banner;
          this.goods = response.data.data.goods;
          this.category = response.data.data["goods-class"];
          this.news = response.data.data.news;
          if (this.loading) {
            setTimeout(() => {
              this.loading = false;
            }, 300);
          }
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.path == '/index') {
        this.swiper.update();
      }
    }
  },
  components: { appFooter, Loading }
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  .link {
    display: block;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 16.8rem;
    }
  }
}
.products {
  padding: 4rem 0 4rem;
  background-color: #fff;
  .column-title {
    p {
      span {
        vertical-align: middle;
      }
      i {
        display: inline-block;
        width: 4rem;
        height: 0.1rem;
        background-color: #999;
        margin: 0 0.8rem;
        vertical-align: middle;
      }
    }
  }
  .product-category {
    padding: 0 1rem;
    .swiper-slide {
      width: auto;
      padding: 1rem 0.5rem;
      .link {
        display: block;
        width: 10rem;
        font-size: 1.3rem;
        color: #333;
        line-height: 3.4rem;
        text-align: center;
        background: #fff;
        border: 1px solid #ccc;
      }
    }
  }
  .product-goods {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    .item {
      width: auto;
    }
    .item-main {
      position: relative;
      width: 13.5rem;
      margin: 0.5rem;
      padding: 1rem;
      background: #fff;
      box-shadow: 0 -1px 6px 0 rgba(192, 192, 192, 0.3),
        3px 3px 6px 0 rgba(192, 192, 192, 0.3);
      .img {
        position: relative;
        padding-top: 100%;
        width: 100%;
        & > img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      .desc {
        padding: 1rem 0;
        .name {
          padding-bottom: 1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 1.3rem;
          color: #666666;
        }
        .price {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          text-align: center;
          font-weight: 600;
          font-size: 1.6rem;
          color: #444444;
        }
      }
    }
  }
}
.column-title {
  padding: 1rem 0;
  text-align: center;
  h2 {
    font-size: 2.2rem;
    font-weight: normal;
    color: #333333;
    letter-spacing: 0.15rem;
    line-height: 1;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.6rem;
    font-size: 1.2rem;
    color: #666666;
  }
}
.link-btn {
  padding: 1rem 0;
  text-align: center;
  span {
    display: inline-block;
    width: 12rem;
    height: 2.8rem;
    color: #b3b3b3;
    font-size: 1.3rem;
    line-height: 2.8rem;
    border: 1px solid #ccc;
    &.iconfont {
      font-size: 2.4rem;
    }
  }
}

.aboutUS {
  padding: 2rem 1.5rem;
  background-color: #f0f0f0;
  .about-img {
    padding: 1rem 1.3rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .title {
    font-size: 2.2rem;
    font-weight: normal;
    color: #333;
    line-height: 1;
    text-align: center;
    margin: 1.5rem 0 1rem;
  }
  .sub-title {
    font-size: 1.2rem;
    font-weight: normal;
    color: #666;
    line-height: 1.6rem;
    text-align: center;
  }
  .info {
    font-size: 1.3rem;
    color: #666;
    line-height: 2rem;
    margin: 1.5rem 0 2rem;
  }
}

.concept {
  padding: 4rem 0 3rem;
  background-color: #fff;
  .concept-list {
    padding: 2rem 1.5rem 0;
    margin-bottom: 2rem;
    li {
      margin-bottom: 3rem;
      &:last-child {
        margin-bottom: 0;
      }
      .link {
        display: block;
        overflow: hidden;
        .concept-img {
          float: left;
          width: 9rem;
          height: 8rem;
          img {
            display: block;
            width: 9rem;
            height: 5.4rem;
          }
        }
        .concept-info {
          height: 8rem;
          padding-left: 1.5rem;
          overflow: hidden;
          .title {
            position: relative;
            border-bottom: 1px solid #ccc;
            h3 {
              font-size: 1.6rem;
              font-weight: normal;
              color: #070b08;
              line-height: 1;
              padding-bottom: 1rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            &:after {
              position: absolute;
              left: 0;
              bottom: -1px;
              display: block;
              content: "";
              width: 5%;
              height: 1px;
              background-color: #c8a165;
              transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            }
          }
          p {
            height: 4rem;
            font-size: 1.3rem;
            color: #666666;
            line-height: 2rem;
            overflow: hidden;
            margin-top: 1rem;
            word-break: break-all;
            white-space: wrap;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.banner {
  .swiper-pagination-bullet {
    width: 0.4rem;
    height: 0.4rem;
    opacity: 1;
    background: rgba(255, 255, 255, 0.3);
    &.swiper-pagination-bullet-active {
      background: #c8a165;
    }
  }
}
</style>

