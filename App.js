import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mines!!!
        </Text>
        <Text>
          Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <Field/>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});