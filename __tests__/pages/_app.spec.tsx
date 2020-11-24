import React from 'react'
import { render } from 'test/utils'
import App from '~/pages/_app'

const Screen = () => <p>Test</p>
const ScreenProps = { message: 'Hello' }

describe('pages/_app', () => {
  it('should render', () => {
    const { getByText } = render(
      <App Component={Screen} pageProps={ScreenProps} router={{} as never} />
    )
    expect(getByText(/test/i)).toBeTruthy()
  })
})
