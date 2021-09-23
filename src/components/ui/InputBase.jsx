import React from 'react'
import PropTypes from 'prop-types'
import { Input, Stack, FormControl } from 'native-base'
import { AntDesign } from '@expo/vector-icons'

export const InputBase = ({
  helperText,
  errorMessage,
  isInvalid,
  isRequired,
  ...rest
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <Stack mx={2}>
        <Input
          style={{}}
          {...rest}
          my={2}
          InputRightElement={() => (
            <AntDesign name="search1" size={42} color="black" />
          )}
        />
        {helperText && (
          <FormControl.HelperText>{helperText}</FormControl.HelperText>
        )}
        {errorMessage && (
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        )}
      </Stack>
    </FormControl>
  )
}

InputBase.propTypes = {
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  isRequired: PropTypes.bool,
  isInvalid: PropTypes.bool,
}

InputBase.propTypes = {
  isRequired: false,
  isInvalid: false,
}

export default InputBase
