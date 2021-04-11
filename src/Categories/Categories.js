import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Categories = ({match}) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

export default Categories;

const styles = StyleSheet.create({
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
});
