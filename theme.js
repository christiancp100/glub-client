import { extendTheme } from 'native-base'
export const theme = extendTheme({
  colors: {
    primary: {
      light: '#009d85',
      dark: '#015A4C',
    },
    secondary: {
      light: '#F01C35',
      dark: '#BE0F23',
    },
    default: {
      light: '#212527',
      dark: '#121414',
    },
    text: {
      dark: '#A6A7A8',
      light: '#FFFFFF',
      black: '#000000',
    },
  },
  fonts: {
    sm: '10',
    md: '16',
    lg: '18',
    xl: '20',
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'xl',
        paddingRight: 5,
        paddingLeft: 5,
      },
    },
  },
})
