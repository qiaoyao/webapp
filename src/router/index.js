import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index');
const Contact = () => import('@/views/contact');
const GoodsList = () => import('@/views/goods_list');
const GoodsDetails = () => import('@/views/goods_details');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/goodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetails',
      component: GoodsDetails
    }
  ]
})
