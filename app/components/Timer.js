import React, { PropTypes, ScrollView, View } from 'react-native'
import TimerMixin from 'react-timer-mixin'
import Time from './Time'
import TimerButton from './TimerButton'
import Title from './Title'
import styles from './TimerStyles'
import getTimeRemaining from '../utils/getTimeRemaining'

let timeinterval
const initialState = { started: false, hours: 0, minutes: 0, seconds: 0 }

let Timer = React.createClass({
  mixins: [ TimerMixin ],
  propTypes: {
    nav: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  },
  getInitialState: function () {
    return initialState
  },
  render: function () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.contentContainer}
          directionalLockEnabled={true}
          horizontal={true}
          onScroll={this.onScroll}
          scrollEventThrottle={16}
        >
          <Title title={this.props.state.timer.selected.title} />
          <Time
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
          <TimerButton
            onStart={this.onStart}
            onStop={this.onStop}
            started={this.state.started}
          />
        </ScrollView>
      </View>
    )
  },
  onScroll() {
    this.props.actions.unselectTimer()
    this.props.nav.replace({
      id: 'timerlist'
    })
  },
  onStart: function () {
    const timeInMinutes = this.props.state.timer.selected.interval
    const timeInMilliseconds = timeInMinutes * 60 * 1000
    const start = Date.parse(new Date())
    const end = new Date(start + timeInMilliseconds)

    this.startTimer(end)
  },
  onStop: function () {
    this.stopTimer()
  },
  startTimer: function (end) {
    timeinterval = this.setInterval(function () {
      let t = getTimeRemaining(end)
      if (t.remaining > 0) {
        this.setState({
          started: true,
          hours: t.hours,
          minutes: t.minutes,
          seconds: t.seconds
        })
      } else {
        this.stopTimer()
      }
    }, 1000)
  },
  stopTimer: function () {
    this.clearInterval(timeinterval)
    this.setState(initialState)
  }
})
export default Timer
