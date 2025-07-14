/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import DayJsAdapter from '@date-io/dayjs'
import JalaliAdapter from '@date-io/jalaali'

import en from 'moment/locale/en-gb'
import fa from 'moment/locale/fa'
// Composables
import { createVuetify } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'

// Translations provided by Vuetify
import enUS from '@/lang/en-US.js'
import faIR from '@/lang/fa-IR.js'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const theme = localStorage.getItem('theme')
const lang = localStorage.getItem('lang') || 'en'
const dateType = localStorage.getItem('dateType')
window.document.querySelectorAll('html')[0].lang = lang[0] + lang[1]
export default createVuetify({
  components: {
    VDateInput,
  },
  date: {
    adapter: dateType === 'jalali' ? JalaliAdapter : DayJsAdapter,
    locale: { enUS: en, faIR: fa, en, fa },
  },
  locale: {
    locale: lang,
    fallback: 'enUS',
    messages: { faIR, enUS },
    rtl: {
      faIR: true,
      enUS: false,
    },
  },
  theme: {
    defaultTheme: theme === 'dark' ? 'dark' : 'light',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#2196f3',
          secondary: '#00bcd4',
          accent: '#ffc107',
          error: '#f44336',
          warning: '#ff9800',
          info: '#03a9f4',
          success: '#4caf50',
        },
      },
      light: {
        dark: false,
        colors: {
          primary: '#2196f3',
          secondary: '#00bcd4',
          accent: '#ffc107',
          error: '#f44336',
          warning: '#ff9800',
          info: '#03a9f4',
          success: '#4caf50',
        },
      },
    },
  },
})
