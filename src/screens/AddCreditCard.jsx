import React, { useState, useEffect } from 'react'
import { Alert, SafeAreaView, View, Platform, StyleSheet } from 'react-native'
import { Switch, Text } from 'native-base'
import layout from 'components/layout/Layout.styles'
import {
  StripeProvider,
  CardField,
  CardForm,
  useConfirmPayment,
  PaymentSheetError,
  useStripe,
} from '@stripe/stripe-react-native'
import Button from 'components/ui/Button'
import axios from 'axios'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

// const stripePromise = loadStripe('pk_test_u3ZcmfHqRT2i7Nn4LwX52y0l')

const AddCreditCard2 = () => {
  const [saveCard, setSaveCard] = useState(false)
  const [isComplete, setComplete] = useState(false)
  const { confirmPayment, loading } = useConfirmPayment()

  const fetchPaymentIntentClientSecret = async () => {
    const response = await axios
      .post('/tickets/', {})
      .catch((err) => console.log('Err', err.message))

    const { clientSecret, ephemeralKey, customer } = await response.data

    return {
      clientSecret,
      ephemeralKey,
      customer,
    }
  }

  const handlePayPress = async () => {
    // 1. fetch Intent Client Secret from backend
    const { clientSecret } = await fetchPaymentIntentClientSecret()

    // 2. Gather customer billing information (ex. email)
    const billingDetails = {
      email: 'christiancp100@gmail.com',
      phone: '+48888000888',
      addressCity: 'Houston',
      addressCountry: 'US',
      addressLine1: '1459  Circle Drive',
      addressLine2: 'Texas',
      addressPostalCode: '77063',
    } // mocked data for tests

    // 3. Confirm payment with card details
    // The rest will be done automatically using webhooks
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails,
      setupFutureUsage: saveCard ? 'OffSession' : undefined,
    })

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message)
    } else if (paymentIntent) {
      Alert.alert(
        'Success',
        `The payment was confirmed successfully! currency: ${paymentIntent.currency}`
      )
    }
  }

  return (
    <StripeProvider
      stripeAccountId="acct_1Ju0YsLpaIwDq3NC"
      publishableKey="pk_test_u3ZcmfHqRT2i7Nn4LwX52y0l"
    >
      <SafeAreaView style={layout.container}>
        {/*<CardField
          postalCodeEnabled={false}
          autofocus
          placeholder={{
            number: '4242 4242 4242 4242',
            postalCode: '12345',
            cvc: 'CVC',
            expiration: 'MM|YY',
          }}
          onCardChange={(cardDetails) => {
            console.log('cardDetails', cardDetails)
          }}
          onFocus={(focusedField) => {
            console.log('focusField', focusedField)
          }}
          cardStyle={{}}
          style={{
            width: wp('100%'),
            height: hp('10%'),
          }}
        />*/}
        <CardForm
          autofocus
          cardStyle={inputStyles}
          style={styles.cardField}
          onFormComplete={(cardDetails) => {
            console.log(cardDetails)
            setComplete(cardDetails.complete)
          }}
        />
        <View style={{}}>
          <Switch
            onValueChange={(value) => setSaveCard(value)}
            value={saveCard}
          />
          <Text style={{}}>Save card during payment</Text>
        </View>
        <Button variant="primary" onPress={handlePayPress} disabled={loading}>
          Confirmar Pago
        </Button>
      </SafeAreaView>
    </StripeProvider>
  )
}

const inputStyles = {
  flex: 1,
  backgroundColor: '#FFFFFF',
  height: hp('100%'),
}

const styles = StyleSheet.create({
  cardField: {
    width: '100%',
    ...Platform.select({
      ios: {
        height: hp('100%'),
      },
      android: {
        height: hp('100%'),
      },
    }),
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    marginLeft: 12,
  },
  input: {
    height: 440,
    borderBottomColor: '#000',
    borderBottomWidth: 1.5,
  },
})

const AddCreditCard = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(false)
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false)
  const [clientSecret, setClientSecret] = useState()

  const fetchPaymentSheetParams = async () => {
    const response = await axios.post('/tickets/', {})
    const { paymentIntent, customer } = await response.data
    setClientSecret(paymentIntent)
    return {
      paymentIntent,
      customer,
    }
  }

  const initializePaymentSheet = async () => {
    const { paymentIntent, customer } = await fetchPaymentSheetParams()

    const address = {
      city: 'A Coruña',
      country: 'ES',
      line1: '510 Townsend St.',
      line2: '123 Street',
      postalCode: '15009',
      state: 'A Coruña',
    }
    const billingDetails = {
      name: 'Jane Doe',
      email: 'foo@bar.com',
      phone: '659699669',
      address: address,
    }

    const { error } = await initPaymentSheet({
      customerId: customer,
      paymentIntentClientSecret: paymentIntent,
      customFlow: false,
      merchantDisplayName: 'Example Inc.',
      applePay: false,
      merchantCountryCode: 'US',
      style: 'automatic',
      googlePay: true,
      testEnv: true,
      primaryButtonColor: '#635BFF', // Blurple
      returnURL: 'stripe-example://stripe-redirect',
      defaultBillingDetails: billingDetails,
      allowsDelayedPaymentMethods: true,
    })
    if (!error) {
      setPaymentSheetEnabled(true)
    } else if (error.code === PaymentSheetError.Failed) {
      Alert.alert(
        `PaymentSheet init failed with error code: ${error.code}`,
        error.message
      )
    } else if (error.code === PaymentSheetError.Canceled) {
      Alert.alert(
        `PaymentSheet init was canceled with code: ${error.code}`,
        error.message
      )
    }
  }

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return
    }
    setLoading(true)
    const { error } = await presentPaymentSheet()

    if (!error) {
      Alert.alert('Success', 'The payment was confirmed successfully')
    } else if (error.code === PaymentSheetError.Failed) {
      Alert.alert(
        `PaymentSheet present failed with error code: ${error.code}`,
        error.message
      )
    } else if (error.code === PaymentSheetError.Canceled) {
      Alert.alert(
        `PaymentSheet present was canceled with code: ${error.code}`,
        error.message
      )
    }
    setPaymentSheetEnabled(false)
    setLoading(false)
  }

  useEffect(() => {
    initializePaymentSheet()
  }, [])

  return (
    <StripeProvider
      stripeAccountId="acct_1Ju0YsLpaIwDq3NC"
      publishableKey="pk_test_u3ZcmfHqRT2i7Nn4LwX52y0l"
    >
      <SafeAreaView>
        <Button
          loading={loading}
          disabled={!paymentSheetEnabled}
          variant="primary"
          onPress={openPaymentSheet}
        >
          Checkout
        </Button>
      </SafeAreaView>
    </StripeProvider>
  )
}

export default AddCreditCard

/*

1. paymentsuicompletescreen: tarjetas ya guardadas

2. payments ui custom: multistep en un lado selector de tarjetas, en otro comparar

3. Multiline Webhook Payment Screen: selector de guardar tarjeta

*/
