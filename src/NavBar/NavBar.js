import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';

const NavBar = ({match}) => (
  <View style={styles.container}>
    <View style={styles.nav}>
      <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>About</Text>
      </Link>
      <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Categories</Text>
      </Link>
      <Link to="/profile" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Profile</Text>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
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
    fontSize: 15,
  },
});

export default NavBar;
