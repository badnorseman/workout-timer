import React, { Component, Navigator, PropTypes, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as timerActions from '../actions/timerActions'
import Timer from '../components/Timer'
import TimerList from '../components/TimerList'
import styles from './MainStyles'

class Main extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }
  componentDidMount() {
    this.props.actions.loadTimers()
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{ id: 'timerlist' }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </View>
    )
  }
  renderScene(route, nav) {
    const { state, actions } = this.props

    if (route.id === 'timer') {
      return (<Timer nav={nav} state={state} actions={actions} />)
    } else {
      return (<TimerList nav={nav} state={state} actions={actions} />)
    }
  }
  configureScene(route) {
    if (route.id === 'timer' || route.id === 'timerlist') {
      return Navigator.SceneConfigs.FloatFromRight
    }
  }
}

const mapStateToProps = state => ({ state })

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(timerActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
