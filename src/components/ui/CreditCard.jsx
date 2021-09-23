import React from 'react'
import {
  Text,
  Image,
  View,
  Icon,
  Box,
  Actionsheet,
  useDisclose,
} from 'native-base'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import { theme } from 'root/theme'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons'

const selectCompanyLogo = (company) => {
  switch (company) {
    case 'visa':
      return require('public/img/visa_card.png')
    case 'master_card':
      return require('public/img/master_card.png')
  }
}

export const CreditCard = ({ company, last4Digits, expirationDate }) => {
  const { isOpen, onOpen, onClose } = useDisclose()
  return (
    <ImageBackground
      style={{ width: wp('80%'), height: wp('80%') / 1.6 }}
      imageStyle={{ borderRadius: 18 }}
      source={require('public/img/card_background.png')}
    >
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
        }}
        onPress={onOpen}
      >
        <Entypo
          name="dots-three-vertical"
          size={24}
          color={theme.colors.text.light}
        />
      </TouchableOpacity>
      <Image
        source={selectCompanyLogo(company)}
        size="md"
        alt="Card Company"
        resizeMode="contain"
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
        }}
      />
      <Box
        p={12}
        py={20}
        mt={10}
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <View flexDirection="row">
          <Text fontSize="xl" color={theme.colors.text.light} marginX="2">
            ****
          </Text>
          <Text fontSize="xl" color={theme.colors.text.light} marginX="2">
            ****
          </Text>
          <Text fontSize="xl" color={theme.colors.text.light} marginX="2">
            ****
          </Text>
          <Text fontSize="xl" color={theme.colors.text.light} marginX="2">
            {last4Digits}
          </Text>
        </View>
        <View>
          <Text fontSize="sm" color={theme.colors.text.light} marginLeft="2">
            VÁLIDA HASTA: {expirationDate}
          </Text>
        </View>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item
            startIcon={
              <Icon
                as={<MaterialIcons name="delete" />}
                color={theme.colors.secondary.light}
                mr={3}
              />
            }
          >
            Borrar tarjeta
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={onClose}
            startIcon={
              <Icon
                as={<AntDesign name="closecircleo" size={24} color="black" />}
                color="muted.500"
                mr={3}
              />
            }
          >
            Cerrar
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </ImageBackground>
  )
}

CreditCard.propTypes = {
  company: PropTypes.string,
  last4Digits: PropTypes.number,
  expirationDate: PropTypes.string,
}

CreditCard.defaultProps = {
  company: 'visa',
}
