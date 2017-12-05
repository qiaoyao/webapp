<template>
  <div class="contact">
    <div class="map-box">
      <div class="shop_map" id="container"></div>
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
import {computedREM} from '../assets/js/base'
const rem = computedREM();
console.log(require("../assets/images/jindu.jpg"));
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
          image: require("../assets/images/jindu.jpg")
        },
        {
          address: "上海市长宁区古北路786号",
          name: "允典居家总店（古北路店）",
          city: "上海市",
          image: require("../assets/images/gubei.jpg")
        },
        {
          address: "北京市朝阳区北四环东路116号",
          name: "允典居家总店（北京北四环店）",
          city: "北京市",
          image: require("../assets/images/beijing.jpg")
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
    this.changeTab(-1);
    this.initialize();
    // this.haha();
  },
  methods: {
    // haha() {
    //   this.$http
    //     .post(this.$URL + "wap/test",{act:"dfdsjfkdsf"})
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
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
      this.opts = { width: 33*rem };
      this.sContent =
        "<img style='float:left;width:9rem;height:6rem;' id='imgDemo' src='" +
        this.imageUrl +
        "'/>" +
        "<div style='float:left;margin-top: 1.3rem;margin-left:1rem;color:#333;font-size:1.2rem;'><p style='float:left;margin-bottom: 0.3rem;'>店铺名称：" +
        this.store_name +
        "</p>" +
        "<p>详细地址：" +
        this.address +
        "</p></div>";
        this.initialize();
    },
    initialize() {
      var _this = this;
        this.map = new BMap.Map("container");
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint(this.address, function (point1) {
            if (point1) {
                _this.point = point1;
                _this.map.enableScrollWheelZoom();
                _this.map.addControl(new BMap.NavigationControl());
                _this.map.addControl(new BMap.ScaleControl());
                _this.map.addControl(new BMap.OverviewMapControl());
                _this.setPoint(_this.point);
            } else {
                alert("您选择地址没有解析到结果!");
            }
        }, this.city);
    },
    setPoint(point) {
        if (point) {
            this.map.centerAndZoom(point, 15);
            var marker = new BMap.Marker(point);
            var infoWindow = new BMap.InfoWindow(this.sContent, this.opts);
            marker.addEventListener("click", function () {
                this.openInfoWindow(infoWindow);
                //图片加载完毕重绘infowindow
                document.getElementById('imgDemo').onload = function (){
                    infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                }
            });
            this.map.addOverlay(marker);
            marker.openInfoWindow(infoWindow);
        }
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
  .shop_map {
    width: 100%;
    height: 100%;
  }
}

.store-tab-group {
  overflow: hidden;
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
