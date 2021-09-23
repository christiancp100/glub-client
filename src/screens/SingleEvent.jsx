import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native'

import PropTypes from 'prop-types'
import moment from 'moment/min/moment-with-locales'
import { useGetEvent } from 'api/useGetEvent'
import { theme } from 'root/theme'
import OnSaleTicketCard from 'components/event/OnSaleTicket'

export const SingleEvent = ({ route, navigation }) => {
  const { id } = route.params

  const { data: event } = useGetEvent({ id })

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.topImage}
        source={require('public/img/pelicano.jpg')}
      >
        <View style={styles.opacityLayer} />
        <View
          style={{
            justifyContent: 'center',
            height: '50%',
          }}
        >
          <Text style={styles.headerText}>{event.name}</Text>
          <Text style={styles.dateText}>
            {moment(event.date).format('d [de] MMMM')}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.infoContainer}>
        <ImageBackground
          style={{
            width: 90,
            height: 90,
            position: 'absolute',
            left: '50%',
            top: '-7.5%',
          }}
          imageStyle={{
            transform: [{ translateX: -50 }],
            borderRadius: 15,
            overflow: 'hidden',
            backgroundColor: 'white',
          }}
          source={require('public/img/pelicano-logo.jpeg')}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ticketsContainer}
        >
          {event.tickets &&
            event.tickets.map((ticket, i) => (
              <OnSaleTicketCard key={i} {...ticket} />
            ))}

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>Descripción del Evento</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.infoImageContainer}
          >
            {event.images &&
              event.images.map((image, i) => (
                <Image key={i} style={styles.infoImage} source={image} />
              ))}
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary.light,
  },
  topImage: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  opacityLayer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '60%',
    opacity: 0.6,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  headerText: {
    textTransform: 'capitalize',
    marginTop: '5%',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      height: 3,
      width: 4,
    },
  },
  dateText: {
    textTransform: 'capitalize',
    marginTop: '5%',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {
      height: 3,
      width: 4,
    },
  },
  arrowBack: {
    position: 'absolute',
    top: '10%',
    zIndex: 99999,
    left: '5%',
  },
  infoContainer: {
    backgroundColor: theme.colors.default.light,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '80%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingBottom: '25%',
  },
  eventName: {
    marginTop: '10%',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },

  ticketsContainer: {
    marginTop: '15%',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  descriptionHeader: {
    fontSize: 20,
    marginTop: '5%',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'white',
    textAlign: 'left',
  },
  eventDescription: {
    marginTop: '5%',
    color: 'white',
    textAlign: 'left',
    fontSize: 15,
  },
  infoImage: {
    borderRadius: 12,
    width: 200,
    height: 100,
    marginHorizontal: 5,
  },
  infoImageContainer: {
    width: '90%',
    marginTop: '10%',
    flex: 1,
    alignContent: 'flex-start',
    marginLeft: '5%',
  },
})

SingleEvent.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

export default SingleEvent
