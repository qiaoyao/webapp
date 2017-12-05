<template>
    <div id="goods_list">
        <tab :tabs="tabs"></tab>
        <search-tag :searchTag="searchTag"></search-tag>
    </div>
</template>

<script>
import Tab from "@/components/tab";
import SearchTag from "@/components/search_tag";

export default {
  components: { Tab, SearchTag },
  data() {
    return {
      tabs: ["全部", "新品"],
      searchTag: ["全部", "新品"],
    };
  }
};
</script>

<style scoped lang="scss">
#goods_list{
    background: #ccc;
}
</style>
