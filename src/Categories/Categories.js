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
  // touch a category, open the Swiper component with the corresponding category info
  const [selectedCategory, setSelectedCategory] = useState('');

  const handlePress = id => {
    setSelectedCategory(id);
    <Redirect to="/hottakes" />;
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <View>
      <Text style={styles.header}>Pick a Category</Text>
      <ScrollView>
        <Link
          id="entertainment"
          style={styles.category}
          onPress={() => handlePress('entertainment')}
          to="/hottakes">
          <Text style={styles.categoryText}>Entertainment</Text>
        </Link>
        <TouchableOpacity
          id="food"
          style={styles.category}
          onPress={() => handlePress('food')}>
          <Text style={styles.categoryText}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity
          id="animals"
          style={styles.category}
          onPress={() => handlePress('animals')}>
          <Text style={styles.categoryText}>Animals</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    alignItems: 'center',
    backgroundColor: '#FF2D2E',
    borderRadius: 10,
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
