import React from 'react'

export const Header = () => {
  return (
    <Heading
      style={{
        marginBottom: '20%',
      }}
      alignSelf={{
        base: 'center',
        md: 'flex-start',
      }}
      color={theme.colors.text.light}
    >
      Mis Entradas
    </Heading>
  )
}
