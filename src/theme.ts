import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'pink'
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'pink.500'
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: '#0e0e10',
        color: '#f4f4f5',
      },
      heading: {
        bg: '#0e0e10',
        color: '#f4f4f5',
      },
    }
  }
})

