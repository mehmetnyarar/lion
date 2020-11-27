import { ChakraProvider } from '@chakra-ui/react'
import NextApp, { AppContext, AppProps } from 'next/app'
import React from 'react'
import { appWithTranslation } from '~/i18n'
import { theme } from '~/theme'

/**
 * Application.
 * @param props Props.
 * @returns &lt;App />.
 */
function App ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext)
  return { ...appProps }
}

export default appWithTranslation(App)
