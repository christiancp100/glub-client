import React from 'react'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from 'screens/Home'
import HomeStack from 'navigation/HomeStack'
import { useTheme } from 'native-base'
import { Search } from 'screens/Search'
import { Tickets } from 'screens/Tickets'
import Profile from 'screens/Profile'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary.light,
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopWidth: 0,
          borderTopRightRadius: 15,
          border: 0,
          position: 'absolute',
          padding: 10,
          height: '10%',
          alignItems: 'center',
          backgroundColor: colors.default.light,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-search" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Entradas"
        component={Tickets}
        options={{
          tabBarIcon: ({ color }) => <TicketIcon color={color} />,
        }}
      />
      {/*   <Tab.Screen
        name="Favoritos"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-heart" color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-person" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

const TicketIcon = (props) => {
  return <Fontisto {...props} size={30} name="ticket" />
}

export default BottomTabs
