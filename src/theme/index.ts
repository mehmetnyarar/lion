import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    'html, body': {
      minHeight: '100vh'
    },
    'body, #__next': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }
}

const colors = {
  brand: {
    100: '#FBCFFA',
    200: '#F4A1F8',
    300: '#DD6FEC',
    400: '#BE49D9',
    500: '#9517C1',
    600: '#7410A5',
    700: '#580B8A',
    800: '#3E076F',
    900: '#2D045C'
  }
}

const theme = extendTheme({
  styles,
  colors
})

// debug
// console.debug({ theme })

export { theme }
