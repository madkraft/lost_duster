import { connect, Dispatch } from 'react-redux'
import { loadFixtures, FixtureAction } from '../redux/fixtures'
import { MainState } from '../redux'

import FixtureList from '../components/FixtureList'

function mapState(state: MainState) {
  return state.fixtures
}

function mapDispatch(dispatch: Dispatch<FixtureAction>) {
  return {
    loadFixtures: (id: number, matchday: number) =>
      dispatch(loadFixtures(id, matchday))
  }
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

export default connect(mapState, mapDispatch, mergeProps)(FixtureList)
