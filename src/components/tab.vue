<template>
    <div>
        <div class="tab">
            <div class="item" :class="{'active':curIndex==index}" v-for="(item,index) in tabs" :key="index" @click="curIndex=index">{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            curIndex: 0
        }
    }
};
</script>

<style scoped lang="scss">
@import './../assets/styles/mixin.scss';
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.6rem;
  font-size: 1.4rem;
  color: #070b08;
  background: #ffffff;
  @include border(after,bottom);
  .item {
    flex: 1;
    height: 4.6rem;
    line-height: 4.6rem;
    text-align: center;
    &.active{
        position: relative;
        color: #C8A165;
        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 25%;
            z-index: 2;
            width: 50%;
            height: 1px;
            background: #C8A165;
        }
    }
  }
}
</style>
