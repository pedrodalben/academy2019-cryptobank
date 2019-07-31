import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Feed from './views/Feed.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/feed'
    },
    {
      path: '/',
      redirect: '/feed'
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/create_account',
      name: 'createaccount',
      component: () => import(/* webpackChunkName: "login" */ './views/CreateAccount.vue')
    },
    {
      path: '/pagar',
      name: 'pagar',
      component: () => import(/* webpackChunkName: "new-post" */ './views/Pagar.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/depositar',
      name: 'depositar',
      component: () => import(/* webpackChunkName: "new-post" */ './views/Depositar.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/transferir',
      name: 'transferir',
      component: () => import(/* webpackChunkName: "post" */ './views/Transferir.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
