<template>
  <div class="contact">
    <div class="map-box">
      <div class="shop_map" id="container" style="width:1170px; height:455px;"></div>
    </div>
    <div class="store-tab-group">
      <div class="store-tab" :class="{'checked' : currentTabIndex == 0}" @click="changeTab(0)">
        <div class="white-line"></div>
        <div class="store-info">
          <p class="store-title">允典居家总店（金都路店）</p>
          <p class="address">地址：上海市闵行区金都路1618号</p>
          <p class="tel">电话：021-64976100</p>
        </div>
        <div class="straight-angle"></div>
      </div>
      <div class="store-tab" :class="{'checked' : currentTabIndex == 1}" @click="changeTab(1)">
        <div class="white-line"></div>
        <div class="store-info">
          <p class="store-title">允典居家总店（古北路店）</p>
          <p class="address">地址：上海市长宁区古北路786号</p>
          <p class="tel">电话：021-62786645</p>
        </div>
        <div class="straight-angle"></div>
      </div>
      <div class="store-tab" :class="{'checked' : currentTabIndex == 2}" @click="changeTab(2)">
        <div class="white-line"></div>
        <div class="store-info">
          <p class="store-title">允典居家总店（北京北四环店）</p>
          <p class="address">地址：北京市朝阳区北四环东路116号</p>
          <p class="tel">电话：010-64954847</p>
        </div>
        <div class="straight-angle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/js/config'
const contact = {
  name: "contact",
  data() {
    return {
      currentTabIndex: 0,
      storeInfoList: [
        {
          address: "上海市闵行区金都路1618号",
          name: "允典居家总店（金都路店）",
          city: "上海市",
          image: "images/jindu.jpg"
        },
        {
          address: "上海市长宁区古北路786号",
          name: "允典居家总店（古北路店）",
          city: "上海市",
          image: "images/gubei.jpg"
        },
        {
          address: "北京市朝阳区北四环东路116号",
          name: "允典居家总店（北京北四环店）",
          city: "北京市",
          image: "images/beijing.jpg"
        }
      ],
      address: "",
      city: "",
      store_name: "",
      opts: {},
      sContent: "",
      imageUrl: "",

      map: "",
      point: null
    };
  },
  mounted: function() {
    
console.log(this.$URL);
    this.changeTab(-1);
    this.haha();
  },
  methods: {
    haha() {
      this.$http
        .post(this.$URL + "wap/test",{act:"dfdsjfkdsf"})
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    changeTab(index) {
      if (index == this.currentTabIndex) {
        return false;
      }

      this.currentTabIndex = index;

      if (index == -1) {
        this.currentTabIndex = 0;
        index = 0;
      }

      this.city = this.storeInfoList[index].city;
      this.address = this.storeInfoList[index].address;
      this.store_name = this.storeInfoList[index].name;
      this.imageUrl = this.storeInfoList[index].image;
      this.opts = { width: 384 };
      this.sContent =
        "<img style='float:left;' id='imgDemo' src='" +
        this.imageUrl +
        "' width='96' height='61'/>" +
        "<div style='float:left;margin-top: 13px;margin-left:10px;color:#333;font-size:12px;'><p style='float:left;margin-bottom: 3px;'>店铺名称：" +
        this.store_name +
        "</p>" +
        "<p>详细地址：" +
        this.address +
        "</p></div>";
    }
  }
};
export default contact;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map-box {
  width: 100%;
  height: 45rem;
}
.store-tab-group {
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  .store-tab {
    position: relative;
    flex: 1;
    .white-line {
      border-top: 2px solid #ffffff;
      width: 0.7rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .straight-angle {
      border-bottom: 2px solid #ffffff;
      border-right: 2px solid #ffffff;
      width: 1rem;
      height: 1rem;
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .store-info {
      margin-left: 1rem;
      margin-top: 2rem;
      .store-title {
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #444444;
        font-weight: bold;
      }
      .address {
        color: #666666;
        font-size: 1rem;
        line-height: 1.4rem;
        margin-bottom: 1rem;
        margin-top: 1.5rem;
      }
      .tel {
        color: #666666;
        font-size: 1rem;
        line-height: 1.4rem;
        margin-bottom: 2.7rem;
      }
    }
    &.checked {
      background: linear-gradient(15deg, #b08c64 0%, #ffd89f 100%);
      -webkit-box-shadow: 0 3px 6px 0 rgba(99, 41, 10, 0.2);
      box-shadow: 0 3px 6px 0 rgba(99, 41, 10, 0.2);
      .store-title,
      .address,
      .tel {
        color: white;
      }
    }
  }
}
</style>
