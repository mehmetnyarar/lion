/* eslint-disable jest/expect-expect */
import React from 'react'
import { fireEvent, render } from 'test/utils'
import { ThemeSwitcher } from '~/components/theme'

describe('components/theme', () => {
  it('should render', () => {
    const { getByLabelText } = render(<ThemeSwitcher />)

    // Initial scheme is light
    const button = getByLabelText('scheme.change.light')
    fireEvent.click(button)

    // Change scheme to dark
    expect(getByLabelText('scheme.change.dark')).toBeTruthy()
  })
})
