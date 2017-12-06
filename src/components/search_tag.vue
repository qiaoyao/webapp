<template>
    <div class="search-tag">
        <div class="item" v-for="(item,index) in searchTag" :key="index">
            <span class="text">{{item}}</span>
            <span class="iconfont icon-close" @click="delCurItem(index)"></span>
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
  },
  methods: {
    delCurItem(index){
      this.$emit('delItem', index);
    }
  }
};
</script>

<style scoped lang="scss">
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.search-tag {
  display: flex;
  flex-wrap: wrap;
  .item {
    height: 2.8rem;
    font-size: 0;
    margin: 0.5rem 3rem 0.5rem 0;
    border-radius: 0.2rem;
    color: #333333;
    background: rgba(200, 161, 101, 0.5);
    animation: fade 0.3s;
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
