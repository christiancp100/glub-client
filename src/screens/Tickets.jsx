import React, { useState } from 'react'
import layout from 'components/layout/Layout.styles'
import { Heading, VStack } from 'native-base'
import { SafeAreaView, ScrollView } from 'react-native'
import { theme } from 'root/theme'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useGetTickets } from 'api/useGetTickets'
import { Loading, Error } from 'components/ui/Loading'
import Ticket from 'components/tickets/Ticket'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
export const Tickets = () => {
  const { data: tickets, loading, error } = useGetTickets()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message={'Oops... vuelve a intentarlo más tarde'} />
  }
  return (
    <SafeAreaView style={layout.container}>
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

      <VStack style={{ marginHorizontal: wp('5%'), alignItems: 'center' }}>
        <ScrollView style={{ height: hp('80%') }}>
          {tickets &&
            tickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)}
        </ScrollView>
      </VStack>
    </SafeAreaView>
  )
}
