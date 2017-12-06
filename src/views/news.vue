<template>
  <div class="news">

    <!-- products -->
    <div class="concept">
      <div class="column-title">
          <h2>设计理念</h2>
          <p>Design concept</p>
      </div>
      <ul class="concept-list" v-if="news.length>0">
        <li v-for="item in news" :key="item.id">
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
        </li>
      </ul>

      <div class="link-btn">
        <router-link to="/news" tag="span" class="iconfont icon-arrow-right"></router-link>
      </div>

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
      loading: true
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$http.get("wap/wap-index").then(response => {
        if (response.status == 200 && response.data.code == 0) {
          this.news = response.data.data.news;
          setTimeout(()=>{this.loading = false;},300)
        }
      });
    }
  },
  components: { Loading }
};
</script>

<style lang="scss" scoped>
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

