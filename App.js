import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert
} from 'react-native';

import params from './src/params'
import Field from './src/components/Field'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection';
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  toggleFlag,
  flagsUsed
} from './src/functions'

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
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost) {
      showMines(board)
      Alert.alert('You lost!', 'Better luck next time...')
    }

    if(won){
      Alert.alert('You won!', 'Congratulations!')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    toggleFlag(board, row, column)
    const won = wonGame(board)

    if(won){
      Alert.alert('You won!', 'Congratulations!')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultyLevel = level
    this.setState(this.createState())
  }
  render() {
    return (
      <>
        <View style={styles.container}>
          <LevelSelection isVisible={this.state.showLevelSelection} 
                          onLevelSelected={this.onLevelSelected} 
                          onCancel={() => this.setState({ showLevelSelection: false })}/>
          <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
                  onNewGame={() => this.setState(this.createState())}
                  onFlagPress={() => this.setState({ showLevelSelection: true })}/>
          <View style={styles.board}>
            <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
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
