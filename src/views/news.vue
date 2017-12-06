<template>
  <div class="news">
    <!-- concept -->
    <div class="concept">
      <div class="column-title">
        <h2>设计理念</h2>
        <p>Design concept</p>
      </div>
      <transition-group name="fadeInDown" appear tag="ul" class="concept-list" v-if="news.length>0">
        <router-link :to="'/news/'+item.id" tag="li" v-for="item in news" :key="item.id">
          <div class="concept-img">
            <img :src="item.cover">
          </div>
          <div class="concept-info">
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </div>
        </router-link>
      </transition-group>

      <div class="more-btn" @click="init" v-text="btnMsg"></div>
    </div>
    <loading v-if="loading"></loading> 
  </div>
</template>

<script>
import Loading from "../components/loading";
export default {
  name: "news",
  data() {
    return {
      news: [],
      page: 1,
      hasmore: true,
      ableToLoad: true,
      loading: true
    };
  },
  created() {
    this.init();
  },
  computed: {
    btnMsg() {
      return this.hasmore ? (this.ableToLoad ? '加载更多' : '正在加载中') : '没有数据了';
    }
  },
  methods: {
    init() {
      if (this.hasmore && this.ableToLoad) {
        this.ableToLoad = false;
        this.$http.get("wap/news/news-list?size=6&page="+this.page).then(response => {
          if (response.status == 200 && response.data.code == 0) {
            this.news = this.news.concat(response.data.data);
            this.hasmore = response.data.pagination.total_pages > response.data.pagination.current_page ? true : false;
            this.page = response.data.pagination.current_page + 1;
            this.ableToLoad = true;

            if (this.loading) {
              setTimeout(() => {
                this.loading = false;
              }, 100);
            }
          }
        });
      }
    }
  },
  components: { Loading }
};
</script>

<style lang="scss" scoped>
.column-title {
  padding: 1.5rem 0;
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

.concept {
  padding-bottom: 1rem;
  background-color: #f0f0f0;
  .concept-list {
    padding: 0 1.5rem 2rem;
    margin-bottom: 1rem;
    background-color: #fff;
    li {
      display: block;
      overflow: hidden;
      padding: 1.5rem 0;
      border-bottom: 1px solid #dadada;
      .concept-img {
        float: left;
        width: 9rem;
        height: 6.8rem;
        img {
          display: block;
          width: 9rem;
          height: 5.4rem;
        }
      }
      .concept-info {
        height: 6.8rem;
        padding-left: 1.5rem;
        overflow: hidden;
        h3 {
          font-size: 1.8rem;
          font-weight: normal;
          color: #070b08;
          line-height: 1;
          padding-bottom: 0.8rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          height: 4rem;
          font-size: 1.3rem;
          color: #666666;
          line-height: 2rem;
          overflow: hidden;
          word-break: break-all;
          white-space: wrap;
        }
      }
    }
  }
}

.more-btn {
  color: #666;
  font-size: 1.4rem;
  line-height: 2.6rem;
  padding: 1rem 0;
  text-align: center;
  background-color: #fff;
}

// fadeInDown
.fadeInDown-enter-active, .fadeInDown-leave-active {
  transition: all .5s
}
.fadeInDown-enter, .fadeInDown-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

