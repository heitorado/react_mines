import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import params from './src/params'
import Field from './src/components/Field'

class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Iniciando o Mines!</Text>
          <Field/>
          <Field opened/>
          <Field opened nearMines={1}/>
          <Field opened nearMines={2}/>
          <Field mined/>
          <Field mined opened/>
          <Field mined opened exploded/>
          <Field flagged/>
          <Field flagged opened/>
        </View>
      </>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default App;
