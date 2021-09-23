import React from 'react'
import { Text, View } from 'react-native'
import Header from 'components/home/Header'
import styles from './Home.styles'
import layout from 'components/layout/Layout.styles'
import HomeTabs from 'navigation/HomeTabs'

export const Home = () => {
  return (
    <View style={layout.container}>
      <Header />
      <HomeTabs />
    </View>
  )
}

export default Home
