import Vue from 'vue';
import store from './store';

import Router from 'vue-router';
Vue.use(Router);

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      beforeEnter: ifNotAuthenticated,
    },
  ],
})