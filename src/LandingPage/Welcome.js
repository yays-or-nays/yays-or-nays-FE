import React, { useState } from 'react';
import {Redirect, NativeRouter, Route, Link} from 'react-router-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import logo from '../../ios/yaysornays/Images.xcassets/Image.imageset/appLogo.png';
import HowTo from './HowTo';

const WelcomePage = () => {
  const [tutorialView, setTutorialView] = useState(false);

  const renderTutorial = () => {
    setTutorialView(true);
  }

  return (
    <View style={styles.container}>
      {tutorialView && <HowTo/>}
      <Image
        source={logo}
        style={styles.image}
      />
      <Text style={styles.labelText}>For new users, click the 'How To' button below!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => renderTutorial()}>
        <Text style={styles.buttonText}>How To</Text>
      </TouchableOpacity>
      <Text style={{marginTop: '20%', fontSize: 15}}>If you've been here, you know what to do!</Text>
      <Link
        to="/categories"
        style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  image: {
    height: '50%',
    width: '80%'
  },
  button: {
    backgroundColor: 'dodgerblue',
    width: '40%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%'
  },
  labelText: {
    fontSize: 15
  },
  buttonText: {
    fontSize: 20
  }
})

export default WelcomePage;
