import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const t = (key: string) => key

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  resources: {
    en: {
      common: {}
    }
  }
})

export { i18n }
