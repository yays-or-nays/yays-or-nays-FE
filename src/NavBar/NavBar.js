import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import {useDispatch} from 'react-redux';
import {getCategories} from '../Redux/Actions/categories';

const NavBar = ({match}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.topic}>About</Text>
        </Link>
        <Link
          onPress={() => dispatch(getCategories())}
          to="/categories"
          underlayColor="#f0f4f7"
          style={styles.navItem}>
          <Text style={styles.topic}>Categories</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default NavBar;
