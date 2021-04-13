import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const About = () => {
  return (
    <View>
      <Text style={styles.header}>About the Team</Text>
      <View style={styles.team}>
        <View style={styles.teamHeader}>
          <Text style={styles.teamHeader}>Back End</Text>
        </View>
        <Text style={styles.languages}>Ruby on Rails, Graph QL </Text>
        <View>
          <Text style={styles.person}>Person1: Super cool</Text>
          <Text style={styles.person}>Person2: Just as cool</Text>
          <Text style={styles.person}>Person3: Meh</Text>
        </View>
      </View>
      <View style={styles.team}>
        <View style={styles.teamHeader}>
          <Text style={styles.teamHeader}>Front End</Text>
        </View>
        <Text style={styles.languages}>React Native</Text>
        <View>
          <Text style={styles.person}>Person1: Super cool</Text>
          <Text style={styles.person}>Person2: Just as cool</Text>
          <Text style={styles.person}>Person3: Meh</Text>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  header: {
    color: 'white',
    backgroundColor: '#CB3C19',
    textAlign: 'center',
    fontSize: 30,
    padding: 30,
  },
  team: {
    margin: 30,
  },
  teamHeader: {
    fontSize: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
  },
  languages: {
    marginTop: 10,
    marginBottom: 20,
  },
  person: {
    fontSize: 20,
    margin: 15,
  },
});
