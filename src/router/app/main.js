/**
 * main routes
 */

export default {
  path: '/',
  name: 'Main',
  component: () => import(/* webpackChunkName: 'main' */ '@/pages/main/main.vue'),
  meta: {
    group: 'main',
    disable: false,
    visible: true,
    login: false,
    icon: 'mdi-folder-table-outline',
  },
  children: [],
}
