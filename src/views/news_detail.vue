<template>
  <div class="news-detail wrap-content">
    <!-- concept -->
    <div class="concept">
      <div class="column-title">
        <h2 v-text="info.title"></h2>
        <p v-text="info.add_time"></p>
      </div>
      <div class="content" v-html="info.body"></div>
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
  name: "newsDetail",
  data() {
    return {
      info: {},
      loading: true
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.init();
    });
  },
  methods: {
    init() {
      this.$http.get(this.$URL + "wap/news/news-info/" + this.$route.params.id).then(response => {
        if (response.status == 200 && response.data.code == 0) {
          this.info = response.data.data;

          if (this.loading) {
            setTimeout(() => {
              this.loading = false;
            }, 300);
          }
        }
      });
    }
  },
  components: { appFooter, Loading }
};
</script>

<style lang="scss" scoped>
.concept {
  padding-bottom: 2rem;
  background-color: #f0f0f0;
  .column-title {
    text-align: center;
    padding: 2rem 1rem;
    background-color: #fff;
    h2 {
      font-size: 1.6rem;
      font-weight: normal;
      color: #222;
      line-height: 2rem;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1rem;
      color: #666;
      line-height: 1.2rem;
    }
  }
  .content {
    overflow: hidden;
    word-break: break-all;
    padding: 0.2rem 1rem 1rem;
    background-color: #fff;
  }
}
// fadeInDown
.fadeInDown-enter-active,
.fadeInDown-leave-active {
  transition: all 0.5s;
}
.fadeInDown-enter,
.fadeInDown-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<style lang="scss">
.news-detail {
  .content {
    p {
      font-size: 1.3rem;
      color: #666;
      line-height: 2rem;
      word-break: break-all;
      margin-bottom: 0.5rem;
    }
    img {
      max-width: 100%;
      height: auto;
      margin-top: 1rem;
    }
  }
}
</style>
