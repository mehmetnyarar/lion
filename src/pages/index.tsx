import Head from 'next/head'
import React from 'react'

/**
 * Home screen.
 */
const HomeScreen: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Lion</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Welcome to Lion!</h1>
    </div>
  )
}

export default HomeScreen
