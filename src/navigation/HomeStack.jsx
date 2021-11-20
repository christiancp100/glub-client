import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SingleEvent } from 'screens/SingleEvent'
import Home from 'screens/Home'
import Checkout from 'screens/Checkout'
import AddCreditCard from 'screens/AddCreditCard'

const Stack = createStackNavigator()

export const HomeTabs = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Inicio"
        component={Home}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="SingleEvent"
        component={SingleEvent}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Checkout"
        component={Checkout}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AddCreditCard"
        component={AddCreditCard}
      />
    </Stack.Navigator>
  )
}

export default HomeTabs
