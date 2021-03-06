import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Redirect, NativeRouter, Route, Link} from 'react-router-native';
import {useSelector, useDispatch} from 'react-redux';
import {getHotTake} from '../Redux/Actions/hotTakes';

export const Categories = () => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handlePress = id => {
    dispatch(getHotTake(id));
  };

  const categoryButtons = categories.map(category => {
    return (
      <Link
        id={category.id}
        key={category.id}
        style={styles.category}
        onPress={() => handlePress(category.id)}
        to="/hottakes">
        <Text style={styles.categoryText}>
          {categories.length ? category.category : 'Loading'}
        </Text>
      </Link>
    );
  });

  return (
    <View>
      <Text style={styles.header}>Pick a Category</Text>
      <ScrollView>{categoryButtons}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: '#FF2D2E',
    borderRadius: 30,
    height: 100,
    margin: 10,
    padding: 20,
    justifyContent: 'center',
  },
  categoryText: {
    color: 'white',
    fontSize: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});
