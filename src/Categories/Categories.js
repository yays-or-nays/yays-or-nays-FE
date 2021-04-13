import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import {Redirect, NativeRouter, Route, Link} from 'react-router-native';

const Categories = () => {
  // categories hard coded in, will need to build a use effect to sent network request, save categories in redux store, and get that info from the store
  const [categories, setCategories] = useState([
    'Entertainment',
    'Food',
    'Animals',
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handlePress = id => {
    setSelectedCategory(id);
    <Redirect to="/hottakes" />;
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const categoryButtons = categories.map(category => {
    return (
      <Link
        id={category}
        style={styles.category}
        onPress={() => handlePress(category)}
        to="/hottakes">
        <Text style={styles.categoryText}>{category}</Text>
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
