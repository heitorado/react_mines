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
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'

class App extends Component {

  constructor(props){
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultyLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>Iniciando o Mines!</Text>
          <View style={styles.board}>
            <MineField board={this.state.board} />
          </View>
        </View>
      </>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-end'
  },
  board:{
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

export default App;
