import NextApp, { AppContext, AppProps } from 'next/app'
import React from 'react'
import { appWithTranslation } from '~/i18n'

/**
 * Application.
 * @param props Props.
 * @returns &lt;App />.
 */
function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(App)
