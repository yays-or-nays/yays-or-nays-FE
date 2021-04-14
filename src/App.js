/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, AppRegistry} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Categories from './Categories/Categories';
import About from './LandingPage/AboutDevs';
import HotTakes from './HotTakes/HotTakes';
import WelcomePage from './LandingPage/Welcome';

const App = () => (
  <NativeRouter>
    <View style={styles.filler} />
    <SafeAreaView>
      <View style={styles.main}>
        <Route path="/about" component={About} />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/categories" component={Categories} />
        <Route path="/profile" component={Profile} />
        <Route path="/hottakes" component={HotTakes} />
      </View>
      <NavBar />
    </SafeAreaView>
  </NativeRouter>
);

const styles = StyleSheet.create({
  // filler is super hacky, better way to do this?
  filler: {
    height: 50,
    backgroundColor: '#CB3C19',
  },
  main: {
    height: '90%',
  },
});

AppRegistry.registerComponent('MyApp', () => App);

export default App;
