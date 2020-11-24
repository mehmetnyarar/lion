import { render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'

export const render = (ui: ReactElement) => {
  return {
    ...rtlRender(ui, {
      // Options
    })
  }
}

export * from '@testing-library/react'
