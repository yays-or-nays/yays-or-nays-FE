import React from 'react';
import {StyleSheet, Header, ScrollView, Text, Button, View, TouchableOpacity} from 'react-native';

const Categories = () => (
  <View>
    <Text style={styles.header}>Pick a Category</Text>
    <ScrollView>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Animals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Food</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

export default Categories;

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
});
