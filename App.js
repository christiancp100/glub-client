import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from 'navigation/BottomTabs'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { theme } from './theme.js'
import moment from 'moment/min/moment-with-locales'

export default function App() {
  moment.locale('es')
  const config = {
    dependencies: {
      'linear-gradient': require('expo-linear-gradient').LinearGradient,
    },
  }

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <NavigationContainer>
        <StatusBar style="light" />
        <BottomTabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
