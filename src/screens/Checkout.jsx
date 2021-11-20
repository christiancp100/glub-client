import React from 'react'
import layout from 'components/layout/Layout.styles'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/core'
import { Text, VStack, View } from 'native-base'
import { Button } from 'components/ui/Button'
import { SafeAreaView } from 'react-native'
import { theme } from 'root/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons'
import { CreditCard } from 'components/ui/CreditCard'
import { AlertModal, useAlertModal } from 'components/ui/AlertDialog'

const Checkout = ({
  route: {
    params: { price, id, premium },
  },
}) => {
  const { open, close, isOpen } = useAlertModal()
  const navigation = useNavigation()
  return (
    <SafeAreaView style={layout.container}>
      <VStack alignItems="center">
        <View mt={hp('5%')} justifyContent="space-around">
          <CreditCard
            company="master_card"
            last4Digits={2356}
            expirationDate="10/25"
          />
          <Button
            mt={5}
            variant="black"
            onPress={() =>
              navigation.navigate('AddCreditCard', { id, price, premium })
            }
          >
            Añadir nueva tarjeta
          </Button>
        </View>
        <View height={hp('40%')} justifyContent={'center'}>
          <View
            width={wp('80%')}
            flexDirection="row"
            justifyContent="space-between"
            mb={wp('5%')}
          >
            <Text color={theme.colors.text.light} fontSize="2xl">
              {`Entrada ${premium ? 'Premium' : 'Normal'}`}
            </Text>
            <Text color={theme.colors.text.light} fontSize="2xl" ml="3">
              {price}€
            </Text>
          </View>

          <View
            flexDirection="row"
            justifyContent="space-between"
            width={wp('80%')}
            mb={'10%'}
          >
            <Text color={theme.colors.text.light} fontSize="2xl">
              Total
            </Text>
            <Text color={theme.colors.text.light} fontSize="2xl" ml="3">
              {price}€
            </Text>
          </View>
          <Button
            onPress={open}
            size="lg"
            startIcon={
              <AntDesign
                name="creditcard"
                size={24}
                color={theme.colors.text.light}
              />
            }
          >
            Comprar
          </Button>
        </View>
      </VStack>
      <AlertModal
        close={close}
        isOpen={isOpen}
        confirmText="Comprar"
        cancelText="Cancelar"
        title="Realizar el pago"
        description="Confirma para realizar el pago."
      />
    </SafeAreaView>
  )
}

Checkout.propTypes = {
  route: PropTypes.object,
}

export default Checkout
