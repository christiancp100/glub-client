import React from 'react'
import { View, ImageBackground, Image, StyleSheet } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={styles.headerImage}
        source={require('public/img/header_background.jpg')}
      >
        <View style={styles.headerContent}>
          <View style={styles.overlay} />
          <Image source={require('public/img/logo.png')} style={styles.logo} />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '45%',
    resizeMode: 'contain',
  },
  headerImage: {
    height: hp('25%'),
    width: wp('100%'),
  },
  overlay: {
    height: hp('25%'),
    width: wp('100%'),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
  },
})

export default Header
