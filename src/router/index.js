import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/views/index');
const Contact = () => import('@/views/contact');
const GoodsList = () => import('@/views/goods_list');
const Search = () => import('@/views/search');
const News = () => import('@/views/news');

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
      path: '/search',
      component: Search
    },
    {
      path: '/news',
      component: News
    }
  ]
})
