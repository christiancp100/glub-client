import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { QRCode as QR } from 'react-native-custom-qr-codes'
import { theme } from 'root/theme'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const QRCode = ({ content, ...rest }) => {
  return (
    <QR
      codeStyle="dot"
      outerEyeStyle="circle"
      innerEyeStyle="circle"
      size={hp('8%')}
      content={content}
      {...rest}
    />
  )
}

QRCode.propTypes = {
  content: PropTypes.string,
}

export default QRCode
