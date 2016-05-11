import React, { Component, PropTypes, ScrollView, View } from 'react-native'
import Title from './Title'
import styles from './TimerListStyles'

export default class TimerList extends Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }
  render() {
    const { all } = this.props.state.timer
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {Array.from(all, (el, i) => this.renderRow(el, i))}
        </ScrollView>
      </View>
    )
  }
  renderRow(element, index) {
    return (
      <View key={index} style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.contentContainer}
          directionalLockEnabled={true}
          horizontal={true}
          onScroll={() => this.onScroll(element)}
          scrollEventThrottle={16}
        >
          <Title title={element.title} />
        </ScrollView>
      </View>
    )
  }
  onScroll(element) {
    this.props.actions.selectTimer(element)
    this.props.nav.replace({
      id: 'timer'
    })
  }
}
