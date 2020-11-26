import NextI18Next from 'next-i18next'
import { resolve } from 'path'
import { DEFAULT_LANGUAGE, OTHER_LANGUAGES } from './const'

const i18n = new NextI18Next({
  localePath: resolve('./public/static/locales'),
  otherLanguages: OTHER_LANGUAGES,
  defaultLanguage: DEFAULT_LANGUAGE,
  keySeparator: false
})

const { appWithTranslation, useTranslation, withTranslation } = i18n
export { appWithTranslation, useTranslation, withTranslation }
