import { connect, Dispatch } from 'react-redux'

import { LeagueActions, loadLeague, LeagueAction } from '../redux/leagues'
import { Standing } from '../models'
import { MainState } from '../redux'
import League from '../components/League'

function mapState(state: MainState) {
  const league = state.leagues.standings.find(
    (competition: Standing) => competition.id === state.leagues.currentLeague
  )
  if (league) {
    return {
      data: league.data,
      status: state.leagues.status
    }
  }
  return {}
}

function mapDispatch(dispatch: Dispatch<LeagueAction>) {
  return {
    loadLeague: (id: number) => dispatch(loadLeague(id))
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

export default connect(mapState, mapDispatch, mergeProps)(League)
