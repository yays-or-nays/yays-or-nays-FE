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
import {Categories} from './Categories/Categories';
import About from './About/About';
import HotTakes from './HotTakes/HotTakes';
import {WelcomePage} from './LandingPage/Welcome';

const App = () => (
  <NativeRouter>
    <View>
      <SafeAreaView>
        <View style={styles.main}>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/categories" component={Categories} />
          <Route path="/hottakes" component={HotTakes} />
        </View>
        <NavBar />
      </SafeAreaView>
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  main: {
    height: '95%',
  },
});

AppRegistry.registerComponent('MyApp', () => App);

export default App;
