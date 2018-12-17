import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import A from '@/components/a'
import B from '@/components/b'
import news from '@/components/news/newsList'
import newslist from '@/components/news/new'
import photo from '@/components/photo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'home',
      name: 'home',
      component: Home
    },
    {
      path: '/A',
      name: 'a',
      component: A
    },
    {
      path: '/B',
      name: 'b',
      component: B
    },
    {
      path: '/list',
      name: 'list',
      component: news
    },
    {
      path: '/list/news',
      name: 'news.detail',
      component: newslist
    },
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: photo
    }
  ]
})
