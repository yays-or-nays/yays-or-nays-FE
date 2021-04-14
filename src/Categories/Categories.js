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
    'Bears',
    'Cheese',
    'Penguins',
    'Hobbies',
    'Sharks',
    'Muffins',
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
      <View style={styles.headerBorder}>
        <Text style={styles.header}>All Categories</Text>
      </View>
      <ScrollView style={styles.allCategories}>{categoryButtons}</ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  allCategories: {
    height: '80%',
  },
  category: {
    backgroundColor: '#CB3C19',
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
  headerBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
    margin: 20,
  },
});
