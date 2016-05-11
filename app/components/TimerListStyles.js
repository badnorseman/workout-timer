import React from 'react-native'
import Dimensions from 'Dimensions'
const { StyleSheet } = React
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  contentContainer: {
    height: 100,
    width: width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
