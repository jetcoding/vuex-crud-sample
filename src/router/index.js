import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/pages/login'

import Layout from '@/views/layout'
import Page404 from '@/views/layout/page404'

import Home from '@/views/pages/home'

import Items from '@/views/pages/items/index'
import ItemList from '@/views/pages/items/list'
import ItemEdit from '@/views/pages/items/edit'
import ItemNew from '@/views/pages/items/new'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/page404',
      component: Page404
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: '/items',
          redirect: '/items',
          name: 'Items',
          component: Items,
          children: [
            {
              path: '',
              component: ItemList
            },
            {
              path: ':id/edit',
              name: 'Edit Item',
              component: ItemEdit
            },
            {
              path: 'new',
              name: 'New Item',
              component: ItemNew
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/page404'
    }
  ]
})
