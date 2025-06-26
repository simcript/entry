/**
 * List of routes
 */
import { createRouter, createWebHistory } from 'vue-router/auto'
import app from '@/router/app'
import auth from '@/router/auth'
import errors from '@/router/errors'

const routes = [
  app,
  errors,
  auth,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import errors, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import errors')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  document.title = 'Entry | ' + (to.name || 'Home')
  if (token) {
    if (!to.meta.login) {
      return next({ name: 'Home' })
    }
  } else {
    if (to.meta.login) {
      return next({ name: 'Login' })
    }
  }
  return next()
})

export default router
