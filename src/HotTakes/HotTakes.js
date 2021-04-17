import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  Image,} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';

const testData = [
{ id: "1", uri: require('../assets/1.jpeg')},
{ id: "2", uri: require('../assets/2.jpeg')},
{ id: "3", uri: require('../assets/3.jpeg')},
{ id: "4", uri: require('../assets/4.jpeg')},
{ id: "5", uri: require('../assets/5.jpeg')},
{ id: "6", uri: require('../assets/6.jpeg')},
{ id: "7", uri: require('../assets/7.jpeg')},
{ id: "8", uri: require('../assets/8.jpeg')},
{ id: "9", uri: require('../assets/9.jpeg')},
{ id: "10", uri: require('../assets/10.jpeg')}
]

class HotTakes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>HotTakes</Text>
      </View>
    )}
};

const styles = StyleSheet.create({
  main: {
    height: '95%',
  },
});

export default HotTakes;
