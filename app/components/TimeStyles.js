import React from 'react-native'
import Dimensions from 'Dimensions'
const { StyleSheet } = React
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    color: 'rgb(255,255,255)',
    fontSize: 48,
    textAlign: 'center',
    width: 80
  }
})
