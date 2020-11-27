import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from '~/i18n'

interface Props {}

export const ThemeSwitcher: React.FC<Props> = () => {
  const { t } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      bg='transparent'
      onClick={toggleColorMode}
      aria-label={t(`scheme.change.${colorMode}`)}
    >
      {colorMode === 'light' ? (
        <SunIcon color='yellow.500' />
      ) : (
        <MoonIcon color='white' />
      )}
    </IconButton>
  )
}
