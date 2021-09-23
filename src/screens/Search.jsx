import React from 'react'
import { SafeAreaView } from 'react-native'
import SearchBar from 'components/ui/SearchBar'
import layout from 'components/layout/Layout.styles'

export const Search = () => {
  return (
    <SafeAreaView style={layout.container}>
      <SearchBar placeholder={'Busca eventos o clubs'} />
    </SafeAreaView>
  )
}
