// Plugins
import { useLocale } from 'vuetify'

export const translatorObj = {
  __,
  _languages,
}

export default {
  install: app => {
    app.config.globalProperties.__ = __
    app.config.globalProperties._languages = _languages
  },
}

/**
 * return list of languages
 * @returns {*[]}
 * @private
 */
function _languages () {
  const list = Object.keys(useLocale().messages.value)
  const result = []
  for (const lang of list) {
    if (lang.length > 2) {
      result.push({
        title: __(lang),
        value: lang,
      })
    }
  }
  return result
}

/**
 * this method use vuetify localization module for translate key
 * @see https://vuetifyjs.com/en/features/internationalization
 * @param key
 * @param location
 * @param messages
 * @returns {*|string}
 * @private
 */
function __ (key, location = null, messages = null) {
  try {
    location = location || localStorage.getItem('lang')
    if (location === null) {
      location = useLocale().current.value
      messages = useLocale().messages.value
      localStorage.setItem('messages', JSON.stringify(messages))
      localStorage.setItem('lang', location)
    } else {
      messages = localStorage.getItem('messages')
      if (messages === null) {
        messages = useLocale().messages.value
        localStorage.setItem('messages', JSON.stringify(messages))
      } else {
        messages = JSON.parse(messages)
      }
    }

    // messages = messages || useLocale().messages.value
    // location = location || useLocale().current.value
    if (Object.prototype.hasOwnProperty.call(messages, location)) {
      if (Object.prototype.hasOwnProperty.call(messages[location], key)) {
        return messages[location][key]
      } else {
        if (key) {
          undefinedKeys(key)
        }
        console.warn('Not found language key ' + key)

        // return location + '_' + key
        return key
      }
    } else {
      console.error('Not supported language ' + location)

      return location + ':' + key
    }
  } catch (error) {
    //
    console.log(error)
  }
}

/**
 * this method save fallback translate text in localstorage
 * @param text
 */
function undefinedKeys (text) {
  // lang key generate for lang file
  let value = text.charAt(0).toUpperCase() + text.slice(1)

  value = '"' + value.replaceAll('_', ' ') + '",'
  const key = '"' + text + '": '
  let result = key + value

  // save result to local storage
  let oldResult = localStorage.getItem('undefinedLangKeys')

  if (oldResult === null) {
    oldResult = ''
  }
  if (!oldResult.includes(key)) {
    result = oldResult + result
    localStorage.setItem('undefinedLangKeys', result)
  }
}
