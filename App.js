import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducers';
import { StyleSheet, View } from 'react-native';
import Counter from "./src/views/Counter";
import {mainStyles} from './src/styles/styles';

const store = createStore(reducer);

export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter/>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create(mainStyles);
