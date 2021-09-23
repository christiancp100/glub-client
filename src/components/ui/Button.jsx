import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button as DefaultButton } from 'native-base'
import { theme } from 'root/theme'

export const Button = ({ variant, children, ...rest }) => {
  const variantProps = useMemo(() => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'default':
        return {
          _pressed: {
            backgroundColor: theme.colors[variant].dark,
          },
          bg: theme.colors[variant].light,
        }

      case 'black':
        return {
          _pressed: {
            backgroundColor: theme.colors.default.dark,
          },
          bg: 'black',
        }
    }
  })
  return (
    <DefaultButton
      {...variantProps}
      _text={{ color: theme.colors.text.light }}
      {...rest}
    >
      {children}
    </DefaultButton>
  )
}

Button.propTypes = {
  children: PropTypes.object,
  variant: PropTypes.oneOf(['primary', 'secondary', 'default', 'black']),
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
