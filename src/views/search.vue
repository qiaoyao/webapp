<template>
  <div class="search-wrapper">
    <div class="search">
      <div class="search-header">
        <i class="iconfont icon-search"></i>
        <form class="search-form" action="#" @submit.prevent="searchStart">
          <input type="search" placeholder="请输入关键字查询" v-model="keyword">
        </form>
        <p class="close" @click="clearVal">
          <i class="iconfont icon-close"></i>
        </p>
      </div>
    </div>
    <div class="blank"></div>
    <div class="hstory-main">
      <div class="history-title">
        <p>历史搜索</p>
        <i class="iconfont icon-delete" @click="cleanHistory"></i>
      </div>
      <p class="history-nomal" v-if="!searchTag.length">暂无历史搜索</p>
      <div class="m-search-tag" v-if="searchTag.length">
        <search-tag :searchTag="searchTag" @delItem="delCurItem"></search-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import SearchTag from "@/components/search_tag";

export default {
  components: { SearchTag },
  created() {
    this.setShowHeader(false);
    this.setShowFooter(false);
    var s = localStorage.getItem("yd_search");
    if (s) {
      this.searchTag = s.split(",");
    }
  },
  data() {
    return {
      keyword: "",
      searchTag: []
    };
  },
  watch: {
    $route(to, from) {
      var isShow = null;
      if (to.path != "/search") {
        isShow = true;
      } else {
        isShow = false;
      }
      this.setShowHeader(isShow);
      this.setShowFooter(isShow);
    }
  },
  methods: {
    searchStart() {
      var _this = this;
      var s = localStorage.getItem("yd_search");
      if (s) {
        this.searchTag = s.split(",");
        this.searchTag = this.searchTag.filter(function(item) {
          return _this.keyword != item;
        });
      }
      this.searchTag.unshift(this.keyword);
      localStorage.setItem("yd_search", this.searchTag);
      this.$router.push({
        path: `/goodsList`
      });
    },
    cleanHistory() {
      localStorage.removeItem("yd_search");
      this.searchTag = [];
    },
    clearVal() {
      this.keyword = "";
    },
    delCurItem(index) {
      this.searchTag.splice(index, 1);
      localStorage.setItem("yd_search", this.searchTag);
    },
    ...mapMutations(["setShowHeader", "setShowFooter"])
  }
};
</script>

<style scoped lang="scss">
@import "./../assets/styles/mixin.scss";
.search-wrapper {
  .blank {
    width: 100%;
    height: 1rem;
    background: #eee;
  }
  .search {
    height: 4.4rem;
    .search-header {
      display: flex;
      align-items: center;
      margin: 0 1.5rem;
      @include border(after, bottom, #666);
      & > .iconfont {
        font-size: 1.4rem;
        color: #999;
      }
      .search-form {
        flex: 1;
        height: 3.4rem;
        padding: 0 1rem;
        & > input {
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          margin-top: 0.7rem;
          font-size: 1.3rem;
          color: #b3b3b3;
        }
      }
      .close {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        text-align: center;
        background: #666;
        .iconfont {
          display: inline-block;
          font-size: 0.8rem;
          color: #fff;
          line-height: 1.8rem;
        }
      }
    }
  }
  .hstory-main {
    .history-title {
      display: flex;
      align-items: center;
      height: 5rem;
      padding: 0 1.5rem;
      @include border(after, bottom, #EDEDED);
      & > p {
        flex: 1;
        font-size: 1.2rem;
        color: #888888;
      }
      .iconfont {
        padding: 1rem 0 1rem 1rem;
        font-size: 1.4rem;
        color: #999;
      }
    }
    .history-nomal {
      font-size: 1.4rem;
      padding: 1.5rem;
      color: #666;
    }
    .m-search-tag {
      padding: 1rem 1.5rem 1.5rem;
    }
  }
}
</style>
