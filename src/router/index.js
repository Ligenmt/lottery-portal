import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Home from '../views/home/index'

const routeMap = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true,
    meta: {title: 'home'}
  },
  {
    path: '/cqssc',
    name: '重庆时时彩',
    component: () => import('@/views/cqssc/index'),
    hidden: true,
    meta: {title: '重庆时时彩'}
  },
  {
    path: '/abxxn',
    name: 'abxxn',
    component: () => import('@/views/abxxn/index'),
    hidden: true,
    meta: {title: 'abxxn'}
  },
  {
    path: '/abxxn2',
    name: 'abxxn2',
    component: () => import('@/views/abxxn2/index'),
    hidden: true,
    meta: {title: 'abxxn2'}
  },
  {
    path: '/abxxnv2',
    name: 'abxxnv2',
    component: () => import('@/views/abxxnv2/index'),
    hidden: true,
    meta: {title: 'abxxnv2'}
  },
  {
    path: '/algorithm01',
    name: 'algorithm01',
    component: () => import('@/views/algorithm01/index'),
    hidden: true,
    meta: {title: 'algorithm01'}
  },
  {
    path: '/algorithm01Pl5',
    name: 'algorithm01Pl5',
    component: () => import('@/views/algorithm01Pl5/index'),
    hidden: true,
    meta: {title: 'algorithm01排列5'}
  },
  {
    path: '/algorithm01Xywfc',
    name: 'algorithm01Xywfc',
    component: () => import('@/views/algorithm01Xywfc/index'),
    hidden: true,
    meta: {title: 'algorithm01幸运五分彩'}
  },
  {
    path: '/not_same',
    name: 'not_same',
    component: () => import('@/views/notsame/index'),
    hidden: true,
    meta: {title: 'not_same'}
  },
  {
    path: '/not_same_v3',
    name: 'not_same_v3',
    component: () => import('@/views/notsamev3/index'),
    hidden: true,
    meta: {title: 'not_same_v3'}
  },
  {
    path: '/not_same_plus',
    name: 'not_same_plus',
    component: () => import('@/views/notsameplus/index'),
    hidden: true,
    meta: {title: 'not_same_plus'}
  },
]

export default new Router({
  routes: routeMap
})
