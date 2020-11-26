import React from 'react'
import { withTranslation } from '~/i18n'
import { NextScreen } from '~/types'

/**
 * &lt;ErrorScreen /> props.
 */
interface Props {
  statusCode?: number
}

/**
 * Error screen.
 * @param props Props.
 * @returns &lt;ErrorScreen />.
 */
export const ErrorScreen: NextScreen<Props> = ({ t, statusCode }) => {
  return (
    <div>
      <p>{t('error')}</p>
      {statusCode && <p>{t('error.code', { code: statusCode })}</p>}
    </div>
  )
}

ErrorScreen.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 0

  return {
    statusCode,
    namespacesRequired: ['common']
  }
}

export default withTranslation('common')(ErrorScreen)
