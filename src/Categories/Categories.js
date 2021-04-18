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
import {connect} from 'react-redux';

export const Categories = ({categories}) => {
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
          <Text style={styles.categoryText}>
            {categories ? categories[0].category : 'Loading'}
          </Text>
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

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
