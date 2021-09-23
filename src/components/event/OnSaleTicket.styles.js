import { StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { theme } from 'root/theme'

export const CARD_HEIGHT = 140
export const BUTTON_MARGIN = 3
export const BUTTON_HEIGHT = (CARD_HEIGHT - BUTTON_MARGIN) / 2

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 10,
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    paddingHorizontal: '5%',
    position: 'relative',
    width: wp('70%'),
    backgroundColor: 'white',
    height: CARD_HEIGHT,
    borderRadius: 15,
  },
  entradaType: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  premium: {
    backgroundColor: '#BF9B30',
    color: 'white',
  },
  incluyeText: {
    fontWeight: '200',
    fontSize: 15,
    marginTop: '2%',
    textTransform: 'uppercase',
    marginBottom: '2%',
  },
  bebidas: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: '1%',
  },
  priceContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    right: '8%',
    bottom: '0%',
  },
  priceFirstPart: {
    fontSize: 40,
    fontWeight: '900',
  },
  priceSecondPart: {
    fontSize: 18,
  },
  currencyText: {
    marginTop: '10%',
    fontSize: 30,
    fontWeight: '400',
  },
  buttonsContainer: {
    marginLeft: '2%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: wp('15%'),
    backgroundColor: theme.colors.primary.light,
    borderRadius: 15,
    height: BUTTON_HEIGHT,
  },
  edit: {
    marginBottom: 3,
  },
  delete: {
    marginTop: 3,
  },
  icon: {
    alignSelf: 'center',
    marginVertical: '15%',
    width: 40,
    height: 40,
    color: 'white',
  },
})
