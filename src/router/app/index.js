import main from '@/router/app/main'

export default {
  // Dashboard pages
  path: '/',
  name: 'Dashboard',
  component: () => import(/* webpackChunkName: 'default' */ '@/layouts/default.vue'),
  meta: {
    group: 'layout',
    disable: false,
    visible: false,
    login: false,
    icon: 'mdi-speedometer-slow',
  },
  children: [
    main,
  ],
}
