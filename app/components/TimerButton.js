import React, { Component, PropTypes, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from './Button'
import styles from './TimerButtonStyles'

export default class TimerButton extends Component {
  static propTypes = {
    started: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeButton}>
          {(this.props.started)
            ?
            <Button onPress={this.props.onStop}>
              <Icon name="stop" size={112} />
            </Button>
            :
            <Button onPress={this.props.onStart}>
              <Icon name="play-arrow" size={112} />
            </Button>
          }
        </View>
      </View>
    )
  }
}
