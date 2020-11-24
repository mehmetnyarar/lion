import type { AppProps } from 'next/app'
import React from 'react'

/**
 * Application.
 * @param props Props.
 * @returns &lt;App />.
 */
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App
