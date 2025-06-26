/**
 * authentication routes
 */

export default {
  path: '/auth',
  redirect: '/auth/login',
  name: 'Auth',
  component: () => import(/* webpackChunkName: 'auth' */ '@/layouts/auth.vue'),
  meta: {
    group: 'layout',
    disable: false,
    visible: false,
    login: false,
    icon: 'mdi-lock',
  },
  children: [
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'login' */ '@/pages/auth/Login.vue'),
      meta: {
        group: 'auth',
        disable: false,
        visible: false,
        login: false,
        icon: 'mdi-key',
      },
    },
  ],
}
