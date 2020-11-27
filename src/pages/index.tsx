import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '~/components/layout'
import { withTranslation } from '~/i18n'
import { NextScreen } from '~/types'

/**
 * Home screen.
 */
export const HomeScreen: NextScreen = ({ t }) => {
  return (
    <Layout title={t('home')}>
      <Flex flex={1} p={3}>
        {t('This is homepage.')}
      </Flex>
    </Layout>
  )
}

HomeScreen.getInitialProps = () => {
  return {
    namespacesRequired: ['common']
  }
}

export default withTranslation('common')(HomeScreen)
