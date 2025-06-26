/**
 * errors routes
 */

export default {
  path: '/:pathMatch(.*)*',
  name: 'PageNotFound',
  component: () => import(/* webpackChunkName: 'notfound' */ '@/pages/errors/NotFound.vue'),
  meta: {
    group: 'error',
    disable: false,
    visible: false,
    login: false,
    icon: 'mdi-cog',
    accesses: ['admin', 'user'],
  },
}
