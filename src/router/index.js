import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index');
const Contact = () => import('@/views/contact');
const GoodsList = () => import('@/views/goods_list');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/goodsList/:id',
      component: GoodsList
    }
  ]
})
