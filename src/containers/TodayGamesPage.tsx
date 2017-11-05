import { connect, Dispatch } from 'react-redux'
import { loadFixtures, FixtureAction } from '../redux/fixtures'
import { MainState } from '../redux'

import FixturesToday from '../components/FixturesToday'

function mapState(state: MainState) {
  return {}
}

function mapDispatch(dispatch: Dispatch<FixtureAction>) {
  return {}
}

function mergeProps(
  stateProps: Object,
  dispatchProps: Object,
  ownProps: Object
) {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps
  }
}

export default connect(mapState, mapDispatch, mergeProps)(FixturesToday)
