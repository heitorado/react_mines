import { Dimensions } from 'react-native'

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proportion of the header panel on screen
  difficultyLeve: 0.1, //Easy: 10% of fields with mines. Medium: 20%. Hard: 30%.
  getColumnsAmount() {
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get('window').height
    const boardHeight =  totalHeight * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
    
  }
}

export default params