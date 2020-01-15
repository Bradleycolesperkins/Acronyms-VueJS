import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Index from '@/views/index'
import ListAcronyms from '@/views/ListAcronyms'
import ViewAcronym from '@/views/ViewAcronym'
import AddNewAcronym from '@/views/AddNewAcronym'
import Login from '@/views/Login'
import Register from '@/views/Register'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Acrocknyms',
      name: 'ListAcronyms',
      component: ListAcronyms
    },
    {
      path: '/Add-New-Acrocknym',
      name: 'AddNewAcronym',
      component: AddNewAcronym,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Acrocknym/:id',
      name: 'ViewAcronym',
      component: ViewAcronym
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
