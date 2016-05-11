import React, { Component, PropTypes, TouchableHighlight, View } from 'react-native'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onPress: PropTypes.func.isRequired
  };
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View>
          {this.props.children}
        </View>
      </TouchableHighlight>
    )
  }
}
