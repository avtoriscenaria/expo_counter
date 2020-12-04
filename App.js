import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducers';
import { StyleSheet, View } from 'react-native';
import Counter from "./src/views/Counter";
import {mainStyles} from './src/styles/styles';

import { PersistGate } from 'redux-persist/integration/react'
//import configStore from "./src/redux/reducers/configStore";
import {persistStore} from "redux-persist";

const store = createStore(reducer);
const persistor = persistStore(store)
//const {store, persistor} = configStore();

export default function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Counter/>
        </View>
          </PersistGate>
      </Provider>
  );
}

const styles = StyleSheet.create(mainStyles);
