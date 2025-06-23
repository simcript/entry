/**
 * this file contain helper functions
 */

import JDate from 'jalali-date'
import { details } from '../../CHANGELOG.json'
import { version } from '../../package.json'

export const toolsObj = {
  _gotoPage,
  _updatePageMeta,
  _date,
  _ver,
}

export default {
  install: (app, options) => {
    app.config.globalProperties._gotoPage = _gotoPage
    app.config.globalProperties._updatePageMeta = _updatePageMeta
    app.config.globalProperties._date = _date
    app.config.globalProperties._version = _ver
    app.config.globalProperties._details = _details
  },
}

function _ver () {
  return version
}

function _details () {
  return details
}

function _gotoPage (page, host = null) {
  host = host || (window.location.protocol + '//' + window.location.host + '/')
  if (page.toString().length > 0) {
    window.location = host + page.replace(/^\/|\/$/g, '')
  } else {
    window.location.reload()
  }
}

function _updatePageMeta (name, value) {
  window.document.querySelector('meta[name="' + name + '"]')
    .setAttribute('content', value)
}

function _date (date = null, onlyDate = false) {
  let lang = localStorage.getItem('lang')
  lang = lang === 'enUS' ? 'enUS' : 'faIR'

  date = date === null ? new Date() : date

  const time = new Date(date)
  let dateObj = new Date(date)
  if (lang === 'faIR') {
    dateObj = new JDate(dateObj)
  }

  let result = ''
  const d = [
    dateObj.getFullYear() + '/',
    dateObj.getMonth() + '/',
    dateObj.getDate() + ' ',
  ]
  if (!onlyDate) {
    d.push(time.getHours() + ':')
    d.push(time.getMinutes() + ' ')
  }
  d.forEach(d => result += (d.toString().length < 3 ? '0' : '') + d)
  return result.includes('NaN') ? '' : result
}
