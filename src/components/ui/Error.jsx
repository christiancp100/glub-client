import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

export const Error = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

Error.propTypes = {
  message: PropTypes.string,
}
