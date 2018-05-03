import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入商品组件
import Goods from '@/components/goods/list'
import GoodsDetail from '@/components/goods/detail'

//引入新闻组件
import News from '@/components/news/list'
import NewsDetail from '@/components/news/detail'

//引入图片组件
import Pictures from '@/components/pictures/list'
import PicDetail from '@/components/pictures/detail'

//引入底部tabbar组件
import Cart from '@/components/tabbar/cart'
import Home from '@/components/tabbar/home'
import Member from '@/components/tabbar/member'
import Search from '@/components/tabbar/search'

export default new Router({
  routes: [
      {
        path:'/cart',
        component:Cart
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/search',
        component:Search
      },
      {
        path:'/member',
        component:Member
      },
      {
        path:'/goods',
        component:Goods
      },
      {
        path:'/goods/detail/:id',
        component:GoodsDetail
      },
      {
        path:'/news',
        component:News
      },
      {
        path:'/news/detail/:id',
        component:NewsDetail
      },
      {
        path:'/pics',
        component:Pictures
      },
      {
        path:'/pics/detail/:id',
        component:PicDetail
      },
      {
        path:'/',
        redirect:'/home'
      },
  ],
  linkActiveClass:'mui-active'
})
