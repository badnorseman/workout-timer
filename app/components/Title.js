import React, { Component, PropTypes, Text } from 'react-native'
import styles from './TitleStyles'

export default class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  };
  render() {
    return (
      <Text style={styles.title}>{this.props.title}</Text>
    )
  }
}
