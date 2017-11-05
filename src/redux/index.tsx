import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { LeagueState, loadLeagueEpic, leaguesReducer } from './leagues'
import { FixturesState, loadFixturesEpic, fixturesReducer } from './fixtures'

export interface MainState {
  leagues: LeagueState
  fixtures: FixturesState
}

export const rootEpic = combineEpics(loadLeagueEpic, loadFixturesEpic)

export const rootReducer = combineReducers<MainState>({
  leagues: leaguesReducer,
  fixtures: fixturesReducer
})
