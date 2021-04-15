import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Item
} from 'react-native';
import Swiper from 'react-native-swiper';

const HowTo = () => {
  return (
      <Swiper
        style={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.headerText}>Welcome to HotTakes!</Text>
          <Text style={styles.text}>An app that allows you to answer the world's most important questions like...</Text>
          <Text style={styles.hotTakeText}>"Is Soup a Drink?"</Text>
          <Text style={styles.text}>Then compare your answers to the world of people to see if you're with the people...or against them.</Text>
        </View >
        <View style={styles.view}>
          <Text style={styles.headerText}>Welcome to HotTakes!</Text>
          <Text style={styles.text}>An app that allows you to answer the world's most important questions like...</Text>
          <Text style={styles.hotTakeText}>"Is Soup a Drink?"</Text>
          <Text style={styles.text}>Then compare your answers to the world of people to see if you're with the people...or against them.</Text>
        </View>
      </Swiper>
  )
}

const styles = StyleSheet.create({
  scrollView: {},
  view: {
    height: '185%',
    alignItems: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center',
    margin: '8%',
    fontSize: 20
  },
  headerText: {
    fontSize: 35,
    marginTop: '10%'
  },
  hotTakeText: {
    fontSize: 30
  }
})

export default HowTo;
