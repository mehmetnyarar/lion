import { NextPage, NextPageContext } from 'next'
import { TFunction } from 'next-i18next'

interface Props {
  t: TFunction
}

interface InitialProps {
  language?: string
  namespacesRequired: string[]
}

/**
 * Next screen.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type NextScreen<P = {}, IP = {}> = NextPage<P & Props, IP & InitialProps>

/**
 * Initial props function.
 */
export type GetInitialProps = (
  context: NextPageContext
) => InitialProps | Promise<InitialProps>
