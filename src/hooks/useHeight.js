import { Dimensions } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const useHeight = () => {
  return {
    hp,
    deviceHeight: Dimensions.get('window').height,
  }
}

export default useHeight
