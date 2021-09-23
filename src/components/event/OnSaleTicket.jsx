import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import IconSelectorWithNames from './DrinkIcon'
import { styles } from './OnSaleTicket.styles'
import { useNavigation } from '@react-navigation/native'

const TicketTitle = ({ premium }) => {
  return (
    <Text style={styles.entradaType}>
      Entrada{' '}
      {premium ? <Text style={styles.premium}>Premium</Text> : ' Normal'}
    </Text>
  )
}

const ReservedTitle = ({ amountOfPeople }) => {
  return (
    <Text style={styles.entradaType}>
      Reservado para {amountOfPeople} personas
    </Text>
  )
}

export const OnSaleTicketCard = ({
  id,
  price,
  drinks,
  premium,
  reserved,
  amountOfPeople,
}) => {
  const navigation = useNavigation()
  const { priceFirstPart: precioFirstPart, priceSecondPart: precioSecondPart } =
    dividePrice(price)

  return (
    <View style={styles.container}>
      <View style={[styles.infoContainer, reserved ? { height: 200 } : {}]}>
        <Text style={styles.entradaType}>
          {reserved ? (
            <ReservedTitle {...{ amountOfPeople }} />
          ) : (
            <TicketTitle {...{ premium }} />
          )}
        </Text>

        <Text style={styles.incluyeText}>Incluye: </Text>

        {drinks &&
          drinks.map((drink, i) => (
            <Text key={i} style={styles.bebidas}>
              <IconSelectorWithNames {...{ drink }} />
            </Text>
          ))}

        <View style={styles.priceContainer}>
          <Text style={styles.priceFirstPart}>{precioFirstPart}</Text>
          <Text style={styles.priceSecondPart}>,{precioSecondPart}</Text>
          <Text style={styles.currencyText}>€</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        {/* <TouchableOpacity style={[styles.edit, styles.button]}>
          <FontAwesome style={styles.icon} size={36} fill="white" name="tag" />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Checkout', { id, price, premium })
          }
          style={styles.button}
        >
          <AntDesign
            style={styles.icon}
            name="shoppingcart"
            size={36}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const dividePrice = (price) => {
  let aux = price.toString().split(',')
  if (aux.length === 1) {
    aux = price.toString().split('.')
  }
  if (aux.length >= 1) {
    return {
      priceFirstPart: aux[0],
      priceSecondPart: aux[1],
    }
  } else {
    return {
      priceFirstPart: 0,
      priceSecondPart: 0,
    }
  }
}

export default OnSaleTicketCard
