<template>
  <div class="index">
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
          <p>—— &nbsp Product &nbsp ——</p>
      </div>
      <!-- product category -->
      <swiper class="product-category" :options="categoryOption" v-if="category.length>0">
        <swiper-slide v-for="item in category" :key="item.stc_id">
            <span class="link">{{item.stc_name}}</span>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      banner: [],
      bannerOption: {
        speed: 300,
        autoplay: 5000,
        pagination: ".swiper-pagination"
      },
      category: [],
      categoryOption: {
        freeMode: true,
        slidesPerView: "auto"
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http.get("wap/wap-index").then(response => {
        if (response.status == 200 && response.data.code == 0) {
          this.banner = response.data.data.banner;
          this.goods = response.data.data.goods;
          this.category = response.data.data["goods-class"];
          this.news = response.data.data.news;
        }
      });
    }
  }
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
  padding: 4rem 0 2rem;
  background-color: #fff;
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

