import React, { useState, useEffect } from 'react';
import {Redirect, NativeRouter, Route, Link} from 'react-router-native';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
import logo from '../../ios/yaysornays/Images.xcassets/Image.imageset/appLogo.png';

const WelcomePage = () => {
  return (
    <View>
      <Image source={logo} />
      <Text>Welcome</Text>
    </View>
  )
}

export default WelcomePage;
