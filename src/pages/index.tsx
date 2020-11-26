import Head from 'next/head'
import React from 'react'
import { LanguageSelector } from '~/components/language'
import { withTranslation } from '~/i18n'
import { NextScreen } from '~/types'

/**
 * Home screen.
 */
export const HomeScreen: NextScreen = ({ t }) => {
  return (
    <div>
      <Head>
        <title>Lion</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{t('_test')}</h1>
      <LanguageSelector />
    </div>
  )
}

HomeScreen.getInitialProps = () => {
  return {
    namespacesRequired: ['common']
  }
}

export default withTranslation('common')(HomeScreen)
