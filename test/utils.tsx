import { ChakraProvider } from '@chakra-ui/react'
import { render as rtlRender } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n } from './mocks'

const Providers: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider>{children}</ChakraProvider>
    </I18nextProvider>
  )
}

export const render = (ui: ReactElement) => {
  return {
    ...rtlRender(ui, {
      wrapper: Providers
    })
  }
}

export * from '@testing-library/react'
