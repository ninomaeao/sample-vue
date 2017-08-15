import VueRouter from 'vue-router'
import Vue from 'vue'

import Error404 from './views/error404.vue'
import Top from './views/top.vue'
import About from './views/about.vue'
import User from './views/user/user.vue'
import UserIndex from './views/user/index.vue'
import UserHome from './views/user/user_home.vue'
import UserProfile from './views/user/user_profile.vue'
import UserSide from './views/user/user_side.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: Error404
  },
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/',
    component: UserIndex
  },
  {
    path: '/user/:id',
    components: {
      default: User,
      side: UserSide
    },
    props: {
      default: true,
      side: true,
    },
    children: [
      {
        path: '',
        component: UserHome,
        name: 'home',
        props: true,
      },
      {
        path: 'profile',
        components: {
          default: UserProfile,
          side: UserSide,
        },
        props: {
          default: true,
          side: true,
        },
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
