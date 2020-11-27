/* eslint-disable @typescript-eslint/no-explicit-any */

import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import { t } from './mocks'

// Mock i18n
jest.mock('~/i18n', () => {
  const actual = jest.requireActual('~/i18n')

  return {
    ...actual,
    useTranslation: () => {
      return {
        t,
        i18n: {
          language: 'en',
          changeLanguage: jest.fn().mockImplementation((value: string) => {
            console.info(value)
          })
        }
      }
    },
    withTranslation: () => (Component: any) => {
      Component.defaultProps = { ...Component.defaultProps, t }
      return Component
    }
  }
})

beforeAll(() => {
  // See https://github.com/nickcolley/jest-axe/issues/147
  // JSDom does not implement this
  // and an error was being thrown from jest-axe because of it.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.getComputedStyle = (() => {}) as never
})
