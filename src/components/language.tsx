import { Select } from '@chakra-ui/react'
import React, { ChangeEvent, useCallback } from 'react'
import { LANGUAGES, useTranslation } from '~/i18n'

/**
 * &lt;LanguageSelector /> props.
 */
interface Props {}

/**
 * Language selector.
 * @package props Props.
 * @returns &lt;LanguageSelector />.
 */
export const LanguageSelector: React.FC<Props> = () => {
  const { t, i18n } = useTranslation()
  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      i18n.changeLanguage(e.target.value)
    },
    [i18n]
  )

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      aria-label={t('language')}
    >
      {LANGUAGES.map((language, index) => (
        <option key={index} value={language}>
          {t(`LANGUAGE.${language}`)}
        </option>
      ))}
    </Select>
  )
}
