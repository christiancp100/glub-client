import React from 'react'
import { View, StyleSheet } from 'react-native'
import EventCard from 'components/home/EventCard'
import { FlatList } from 'react-native-gesture-handler'
import layout from 'components/layout/Layout.styles'
import { theme } from 'root/theme'
import { useGetEvents } from 'api/useGetEvents'

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.default.light,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: theme.colors.default.light,
    paddingBottom: 100,
    alignItems: 'center',
    marginBottom: 100,
  },
  text: {
    color: 'white',
  },
})

export default function Trend() {
  const { data } = useGetEvents()
  return (
    <View style={layout.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <EventCard {...item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}
