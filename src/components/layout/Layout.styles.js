import { StyleSheet } from 'react-native'
import { theme } from 'root/theme'

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.default.light,
  },
  text: {
    color: theme.colors.text.light,
  },
})

export default layout
