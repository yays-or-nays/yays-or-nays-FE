import React, { useState, useEffect } from 'react';
import {Redirect, NativeRouter, Route, Link} from 'react-router-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import logo from '../../ios/yaysornays/Images.xcassets/Image.imageset/appLogo.png';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={styles.image}
      />
      <Text>For new users, click the 'How To' button below!</Text>
      <TouchableOpacity
        style={styles.button}>
        <Text>How To</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  image: {
    height: '60%'
  },
  button: {
    backgroundColor: 'dodgerblue',
    width: '40%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%'
  }
})

export default WelcomePage;
