import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { theme } from 'root/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    width: wp('96%'),
    maxHeight: hp('15%'),
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  title: {
    padding: 5,
    fontSize: 20,
    color: theme.colors.text.black,
    marginBottom: 10,
    fontWeight: '700',
    marginLeft: 10,
  },
  text: {
    paddingLeft: 5,
    fontSize: 15,
    color: theme.colors.text.black,
    marginVertical: 3,
    marginLeft: 10,
  },
  leftPanel: {
    flex: 4,
  },
  imageContainer: {
    flex: 2,
    height: '100%',
    width: '35%',
  },
  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  date: {
    marginLeft: 10,
  },
})
