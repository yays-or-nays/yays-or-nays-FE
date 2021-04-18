import React, {useState} from 'react';
import {Redirect, NativeRouter, Route, Link} from 'react-router-native';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import logo from '../../ios/yaysornays/Images.xcassets/Image.imageset/appLogo.png';
import HowTo from './HowTo';
import {getCategories} from '../Redux/Actions/categories';

const WelcomePage = () => {
  const [tutorialView, setTutorialView] = useState(false);

  const toggleTutorial = () => {
    setTutorialView(!tutorialView);
  };

  return (
    <View style={styles.container}>
      {tutorialView && <HowTo />}
      {!tutorialView && (
        <>
          <Image source={logo} style={styles.image} testID="logo" />
          <View style={styles.infoSection}>
            <Text style={styles.labelText}>
              For new users, click the 'How To' button below!
            </Text>
            <TouchableOpacity style={styles.button} onPress={toggleTutorial}>
              <Text style={styles.buttonText} >How To</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.labelText}>
              If you've been here, you know what to do!
            </Text>
            <Link
              to="/categories"
              style={styles.button}
              onPress={getCategories}>
              <Text style={styles.buttonText}>Get Started</Text>
            </Link>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '95%',
  },
  image: {
    height: 300,
    width: 320,
    marginBottom: 50,
  },
  infoSection: {
    alignItems: 'center',
    backgroundColor: '#FFEECC',
    borderRadius: 10,
    flexDirection: 'column',
    fontSize: 15,
    marginBottom: 20,
    padding: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#FF2D2E',
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  labelText: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default WelcomePage;
