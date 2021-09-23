import { Dimensions } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export const useWidth = () => {
  return {
    wp,
    deviceWidth: Dimensions.get('window').width,
  }
}

export default useWidth
