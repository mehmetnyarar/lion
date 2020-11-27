import { Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from '~/i18n'
import { LanguageSelector } from './language'
import { ThemeSwitcher } from './theme'

interface Props {
  title: string
}

export const Layout: React.FC<Props> = props => {
  const { title, children } = props
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        as='header'
        p={3}
        justifyContent='space-between'
        alignItems='center'
        bg='brand.500'
        color='white'
      >
        <Heading>{t('app.name')}</Heading>
        <ThemeSwitcher />
      </Flex>
      {children}
      <Flex
        as='footer'
        p={3}
        justifyContent='space-between'
        alignItems='flex-start'
        bg='gray.900'
        color='white'
      >
        <Flex flex={1}>
          <Text>{t('app.copyright')}</Text>
        </Flex>
        <Spacer flex={3} />
        <Flex flex={1}>
          <LanguageSelector />
        </Flex>
      </Flex>
    </>
  )
}
