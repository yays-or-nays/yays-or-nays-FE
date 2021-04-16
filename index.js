/**
 * @format
 */
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import configureStore from './src/Redux/store';

const store = configureStore();

const ReduxStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxStore);
