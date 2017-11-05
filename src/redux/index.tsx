import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { LeagueState, loadLeagueEpic, reducer } from './leagues'

export interface MainState {
  leagues: LeagueState
}

export const rootEpic = combineEpics(loadLeagueEpic)

export const rootReducer = combineReducers<MainState>({
  leagues: reducer
})
