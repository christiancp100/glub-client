import React, { useState } from 'react'
import moment from 'moment/min/moment-with-locales'
import { TouchableOpacity, View } from 'react-native'
import { Box, Text, Modal, Button } from 'native-base'
import PropTypes from 'prop-types'
import { theme } from 'root/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import QRCode from 'components/ui/QRCode'

const getTicketType = (ticket) => {
  if (ticket.reserved) {
    return 'Reservado'
  }
  if (ticket.premium) {
    return 'Entrada Premium'
  } else {
    return 'Entrada Normal'
  }
}

export const Ticket = ({ ticket }) => {
  const [isOpenQR, setIsOpenQR] = useState(false)
  return (
    <View key={ticket.id}>
      <Text color={theme.colors.text.dark}>
        {moment(ticket.event.date).format('LL')}
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          height: hp('10%'),
          marginTop: hp('1%'),
        }}
      >
        <Box
          bg={theme.colors.text.light}
          height={'100%'}
          width={wp('60%')}
          borderRadius={12}
          p={5}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: theme.fonts.lg,
            }}
          >
            {ticket.event.name} - {ticket.event.organizer}
          </Text>
          <View
            style={{
              display: 'block',
              marginTop: hp('1%'),
              flex: 1,
              flexDirection: 'column',
              flexWrap: 1,
            }}
          >
            <Text
              style={{
                color: theme.colors.secondary.light,
                fontWeight: 'bold',
                fontSize: theme.fonts.md,
              }}
            >
              1 X
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: theme.fonts.md,
                marginLeft: wp('1%'),
              }}
            >
              {getTicketType(ticket)}
            </Text>
          </View>
        </Box>
        <TouchableOpacity
          onPress={() => setIsOpenQR(true)}
          style={{
            backgroundColor: theme.colors.text.light,
            height: hp('10%'),
            width: wp('25%'),
            marginLeft: wp('1%'),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
          }}
        >
          <QRCode content="hola.com" />
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          _backdrop={{
            backgroundColor: theme.colors.default.dark,
            opacity: 0.95,
          }}
          isOpen={isOpenQR}
          onClose={() => setIsOpenQR(false)}
        >
          <Modal.Content maxWidth={wp('90%')}>
            <Modal.CloseButton />
            <Modal.Body
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <QRCode
                codeStyle="dot"
                outerEyeStyle="circle"
                innerEyeStyle="circle"
                size={hp('30%')}
                content="https://reactnative.com" // Todo change this
                logo={require('public/img/black_logo.png')}
                logoSize={hp('10%')}
              />
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </View>
    </View>
  )
}

Ticket.propTypes = {
  ticket: PropTypes.object,
}

export default Ticket
