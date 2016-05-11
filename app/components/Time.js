import React, { Component, PropTypes, Text, View } from 'react-native'
import styles from './TimeStyles'

export default class Time extends Component {
  static propTypes = {
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  };
  render() {
    let hours = (`0${this.props.hours}`).slice(-2)
    let minutes = (`0${this.props.minutes}`).slice(-2)
    let seconds = (`0${this.props.seconds}`).slice(-2)
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{hours}</Text>
        <Text style={styles.time}>{minutes}</Text>
        <Text style={styles.time}>{seconds}</Text>
      </View>
    )
  }
}
