import { createRouter, createWebHashHistory } from 'vue-router'
import MusicHall from '../views/MusicHall.vue'

const routes = [
  {
    path: '/',
    name: 'musichall',
    component: MusicHall,
  },
  {
    path: '/mymusic',
    name: 'mymusic',
    component: () => import('../views/MyMusic.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/player',
    name: 'player',
    component: () => import('../views/Player.vue'),
  },
  {
    path: '/musiclist',
    name: 'musiclist',
    component: () => import('../views/MusicList.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
