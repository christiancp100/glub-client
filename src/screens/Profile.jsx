import { useGetProfile } from 'api/useGetProfile'
import layout from 'components/layout/Layout.styles'
import Button from 'components/ui/Button'
import QRCode from 'components/ui/QRCode'
import { View } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { theme } from 'root/theme'
import { VStack } from 'native-base'

export const Profile = () => {
  const { data: profile } = useGetProfile()
  return (
    <SafeAreaView
      style={[
        layout.container,
        { justifyContent: 'center', alignItems: 'center' },
      ]}
    >
      <VStack alignItems="center">
        <View>
          <QRCode
            content={JSON.stringify({ userId: profile.id })}
            size={wp('70%')}
            backgroundColor={theme.colors.default.light}
            color={theme.colors.text.light}
            logo={require('public/img/glub_passport.png')}
            logoSize={wp('20%')}
          />
          <Button
            marginTop={hp('10%')}
            onPress={() => alert('Abrir stack de edicion')}
            variant="black"
            startIcon={
              <Feather
                name="edit-2"
                size={24}
                color={theme.colors.text.light}
              />
            }
          >
            Editar datos
          </Button>
        </View>
      </VStack>
    </SafeAreaView>
  )
}

export default Profile
