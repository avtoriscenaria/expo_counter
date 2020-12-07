import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducers';
import { StyleSheet, View } from 'react-native';
import Counter from "./src/views/Counter";
import {mainStyles} from './src/styles/styles';

import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from "redux-persist";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/views/Home";

const Stack = createStackNavigator();

const store = createStore(reducer);
const persistor = persistStore(store)

export default function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
                  <NavigationContainer>
                      <Stack.Navigator initialRouteName="Home">
                          <Stack.Screen name="Home" component={Home} />
                          <Stack.Screen name="Counter" component={Counter} />
                      </Stack.Navigator>
                  </NavigationContainer>
          </PersistGate>
      </Provider>
  );
}

const styles = StyleSheet.create(mainStyles);
