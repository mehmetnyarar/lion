import React from 'react'
import { t } from 'test/mocks'
import { render } from 'test/utils'
import { ErrorScreen } from '~/pages/_error'
import { GetInitialProps } from '~/types'

const getInitialProps = ErrorScreen.getInitialProps as GetInitialProps

describe('pages/_error', () => {
  it('should render', () => {
    const { getByText, queryByText, rerender } = render(<ErrorScreen t={t} />)
    expect(getByText('error')).toBeTruthy()
    expect(queryByText('error.code')).toBeFalsy()

    rerender(<ErrorScreen t={t} statusCode={500} />)
    expect(getByText('error.code')).toBeTruthy()
  })

  it('should return initial props', async () => {
    expect(await getInitialProps({} as never)).toEqual({
      statusCode: 0,
      namespacesRequired: ['common']
    })

    expect(
      await getInitialProps({ res: { statusCode: 401 } } as never)
    ).toEqual({
      statusCode: 401,
      namespacesRequired: ['common']
    })

    expect(
      await getInitialProps({ err: { statusCode: 500 } } as never)
    ).toEqual({
      statusCode: 500,
      namespacesRequired: ['common']
    })
  })
})
