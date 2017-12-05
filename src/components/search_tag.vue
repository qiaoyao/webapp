<template>
    <div class="search-tag">
        <div class="item" v-for="(item,index) in searchTag" :key="index">
            <span class="text">{{item}}</span>
            <span class="iconfont icon-close"></span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    searchTag: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped lang="scss">
.search-tag {
  display: flex;
  padding: 1.5rem 1.5rem 0.5rem;
  .item {
    height: 2.8rem;
    font-size: 0;
    margin-right: 3rem;
    border-radius: 0.2rem;
    color: #333333;
    background: rgba(200, 161, 101, 0.5);
    .text{
        font-size: 1.2rem;
        padding: 0.7rem 0 0.7rem 1.2rem;
    }
    .iconfont{
        font-size: 1rem;
        display: inline-block;
        height: 2.8rem;
        line-height: 3rem;
        padding: 0 1.2rem;
    }
  }
}
</style>
