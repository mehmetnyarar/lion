import React from 'react'
import { fireEvent, render } from 'test/utils'
import { LanguageSelector } from '~/components/language'
import { LANGUAGES } from '~/i18n'

jest.spyOn(console, 'info')

describe('components/language', () => {
  it('should render', async () => {
    const { getByLabelText } = render(<LanguageSelector />)

    // Check a11y
    // const a11y = await axe(container)
    // expect(a11y).toHaveNoViolations()

    // Check the default language
    const select = getByLabelText('language') as HTMLSelectElement
    expect(select.value).toBe('en')
    expect(select.children).toHaveLength(LANGUAGES.length)

    // Change the language
    fireEvent.change(select, { target: { value: 'tr' } })
    expect(console.info).toHaveBeenCalledWith('tr')
  })
})
