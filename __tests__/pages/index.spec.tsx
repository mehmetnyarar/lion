import React from 'react'
import { t } from 'test/mocks'
import { render } from 'test/utils'
import { HomeScreen } from '~/pages'
import { GetInitialProps } from '~/types'

const getInitialProps = HomeScreen.getInitialProps as GetInitialProps

describe('pages/index', () => {
  it('should render', () => {
    const { getByText } = render(<HomeScreen t={t} />)
    expect(getByText(/homepage/i)).toBeTruthy()
  })

  it('should return initial props', async () => {
    expect(await getInitialProps({} as never)).toEqual({
      namespacesRequired: ['common']
    })
  })
})
