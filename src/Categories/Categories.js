import React from 'react';
import {StyleSheet, ScrollView, Text, Button, TouchableOpacity} from 'react-native';

const Categories = () => (
  <ScrollView>
    <TouchableOpacity style={styles.category}>
      <Text>Entertainment</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}>
      <Text>Animals</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.category}>
      <Text>Food</Text>
    </TouchableOpacity>
  </ScrollView>
);

export default Categories;

const styles = StyleSheet.create({
  category: {
    color: 'white',
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    margin: 10,
    padding: 20,
    fontSize: 35,
  },
});
