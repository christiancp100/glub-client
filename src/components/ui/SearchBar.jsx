import React from 'react'
import PropTypes from 'prop-types'
import { Center, Input, Button } from 'native-base'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { theme } from 'root/theme'

const HEIGHT = 60

const SearchButton = () => {
  return (
    <Button
      roundedLeft={0}
      style={{
        backgroundColor: theme.colors.text.black,
        borderRadius: 12,
        height: HEIGHT,
      }}
    >
      <AntDesign
        name="search1"
        style={{ padding: 0, margin: 0 }}
        size={28}
        color={theme.colors.text.light}
      />
    </Button>
  )
}

export const SearchBar = ({ placeholder }) => {
  return (
    <Input
      style={{
        backgroundColor: theme.colors.text.light,
        borderRadius: 0,
        height: HEIGHT,
      }}
      mx={4}
      my={8}
      variant="unstyled"
      size="xl"
      placeholder={placeholder}
      InputRightElement={<SearchButton />}
      InputLeftElement={
        <Center
          style={{
            backgroundColor: theme.colors.text.light,
            height: HEIGHT,
            borderTopStartRadius: 12,
            borderBottomStartRadius: 12,
            paddingLeft: '5%',
          }}
        >
          <Ionicons
            name="filter-outline"
            size={24}
            color={theme.colors.text.dark}
          />
        </Center>
      }
    />
  )
}

export default SearchBar
