import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import tr from './tr.json'


Vue.use(VueI18n)

const locale = 'en'

const messages = {
  en,
  tr
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
