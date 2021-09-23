import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import PropTypes from 'prop-types'
import { theme } from 'root/theme'
import { styles } from './EventCard.styles'
import { formatDate } from 'utils/dates'

export const EventCard = ({ id, name, organizer, date, place, images }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={() => navigation.navigate('SingleEvent', { id, name })}
    >
      <View style={styles.leftPanel}>
        <Text style={styles.title}>
          {name} - {organizer}
        </Text>
        <Text style={styles.text}>
          <AntDesign
            name="calendar"
            size={15}
            color={theme.colors.text.black}
            sytle={styles.icon}
          />
          <Text style={styles.date}>{formatDate(date)}</Text>
        </Text>
        <Text style={styles.text}>
          <MaterialIcons name="place" size={15} color="black" />
          <Text style={styles.text}>{place}</Text>
        </Text>
      </View>
      <View style={styles.imageContainer}>
        {images ? <Image style={styles.image} source={images[0]} /> : null}
      </View>
    </TouchableOpacity>
  )
}

EventCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  organizer: PropTypes.string,
  date: PropTypes.string,
  place: PropTypes.string,
  images: PropTypes.array,
}

export default EventCard
