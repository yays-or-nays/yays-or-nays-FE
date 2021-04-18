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
import {useSelector, useDispatch} from 'react-redux';

export const Categories = () => {
  // touch a category, open the Swiper component with the corresponding category info
  const categories = useSelector(state => state.categories.categories);
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
