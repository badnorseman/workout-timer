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
  timeButton: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 96,
    borderWidth: 1,
    height: 192,
    width: 192,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
