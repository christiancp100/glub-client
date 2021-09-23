import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { add } from 'react-native-reanimated'

import { View, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Trend from 'components/home/Trend'
import { theme } from 'root/theme'
import layout from 'components/layout/Layout.styles'
import { Events } from 'components/home/Events'
import Clubs from 'components/home/Clubs'

const TopTab = createMaterialTopTabNavigator()

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: theme.colors.default.light,
        justifyContent: 'center',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }
        const opacity = isFocused ? 1 : 0

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              padding: 0,
              marginHorizontal: -10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Animated.Text
              style={[{ opacity: add(opacity, 0.3) }, styles.tabText]}
            >
              {label}
            </Animated.Text>
            <Animated.View
              needsOffscreenAlphaCompositing
              style={[
                styles.selectionDot,
                {
                  opacity,
                },
              ]}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export const HomeTabs = () => {
  return (
    <View style={layout.container} needsOffscreenAlphaCmpositing>
      <TopTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <TopTab.Screen name="Eventos" component={Trend} />
        <TopTab.Screen name="Clubs" component={Clubs} />
        {/* <TopTab.Screen name="Eventos" component={Events} /> */}
      </TopTab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  tabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    padding: 0,
  },
  selectionDot: {
    marginTop: 5,
    backgroundColor: theme.colors.secondary.light,
    borderRadius: 50,
    width: 5,
    height: 5,
    textAlign: 'center',
  },
})

export default HomeTabs
