<template>
  <div id="goods_list">
    <tab :tabs="tabs"></tab>
    <search-tag :searchTag="searchTag"></search-tag>
    <div class="list-wrapper">
      <ul class="list">
        <li class="item active" v-for="(item,index) in 4" :key="index">
          <div class="item-main">
            <div class="icon">
              <span class="iconfont icon-fav-full"></span>
            </div>
            <div class="img">
              <img src="./../assets/images/goods_default.png" alt="">
            </div>
            <div class="desc">
              <p class="name">新古典玄关屏风仕女图新古典玄关屏风仕女图</p>
              <p class="price">￥13800.00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="load">
      <p>加载更多</p>
    </div>
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
      searchTag: ["桌子", "花梨木"]
    };
  }
};
</script>

<style scoped lang="scss">
#goods_list {
  background: #f0f0f0;
  .list-wrapper {
    padding: 0.5rem;
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        .item-main {
          position: relative;
          margin: 0.5rem;
          padding: 1rem;
          background: #fff;
          box-shadow: 0 1px 2px 0 rgba(192,192,192,0.30);
          .icon {
            position: absolute;
            top: 1.8rem;
            left: 1.8rem;
            z-index: 2;
            width: 1.6rem;
            height: 1.6rem;
            line-height: 1.6rem;
            text-align: center;
            background: #C0C0C0;
            border-radius: 0.2rem;
            .iconfont{
              font-size: 1rem;
              color: #444444;
            }
          }
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
            .name{
              padding-bottom: 1rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 1.3rem;
              color: #666666;
            }
            .price{
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
        &.active{
          .icon {
            background:#C8A165;;
            .iconfont{
              color:#ffffff;
            }
          }
        }
      }
    }
  }
  .load{
    width: 100%;
    padding-bottom: 1rem;
    height: 4.6rem;
    p{
      line-height: 4.6rem;
      text-align: center;
      font-size: 1.4rem;
      color: #666666;
      background: #ffffff;
    }
  }
}
</style>
