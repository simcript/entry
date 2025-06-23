/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import router from '@/router'
import pinia from '@/stores'
import translator from './translator'
import vuetify from './vuetify'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(translator)
    .use(router)
    .use(pinia)
}
