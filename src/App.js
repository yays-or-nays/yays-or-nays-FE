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
import About from './About/About';
import HotTakes from './HotTakes/HotTakes';

const App = () => (
  <NativeRouter>
    <SafeAreaView>
      <View style={styles.main}>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Categories} />
        <Route path="/profile" component={Profile} />
        <Route path="/hottakes" component={HotTakes} />
      </View>
      <NavBar />
    </SafeAreaView>
  </NativeRouter>
);

const styles = StyleSheet.create({
  main: {
    height: '95%',
  },
});

AppRegistry.registerComponent('MyApp', () => App);

export default App;
