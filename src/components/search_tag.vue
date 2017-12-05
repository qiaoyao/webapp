<template>
  <div class="search-tag">
      <div class="item" v-for="(item,index) in searchTag" :key="index">
          <span class="text">{{item}}</span>
          <span class="iconfont">123</span>
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
}
</script>

<style scoped lang="scss">

</style>
