import React from 'react'
import { render } from 'test/utils'
import HomeScreen from '~/pages'

describe('pages/index', () => {
  it('should render', () => {
    const { getByText } = render(<HomeScreen />)

    expect(getByText(/welcome/i)).toBeTruthy()
  })
})
