import api from '../services/api'
import { setLoadedLeagues, changeLoadedStatus } from '../services/utils'
import { SELECTED_LEAGUES } from '../constants'
import { LeagueStatus, Standing, LeagueData } from '../models'

export enum LeagueActions {
  FETCH_COMPETITION = 'leagues/FETCH_COMPETITION',
  FETCH_COMPETITION_DONE = 'leagues/FETCH_COMPETITION_DONE'
}

export interface LeagueState {
  selectedLeagues: number[]
  currentLeague: null | number
  status: LeagueStatus[]
  standings: Standing[]
}

const initialState: LeagueState = {
  selectedLeagues: SELECTED_LEAGUES,
  currentLeague: null,
  status: setLoadedLeagues(SELECTED_LEAGUES, false),
  standings: []
}

export function leaguesReducer(
  state: LeagueState = initialState,
  action: any
): LeagueState {
  switch (action.type) {
    case LeagueActions.FETCH_COMPETITION:
      return {
        ...state,
        currentLeague: action.payload
      }
    case LeagueActions.FETCH_COMPETITION_DONE:
      return {
        ...state,
        status: changeLoadedStatus(state.status, action.payload.id),
        standings: [
          ...state.standings,
          { id: action.payload.id, data: action.payload.data }
        ]
      }
    default:
      return state
  }
}

export interface LoadLeague {
  type: LeagueActions.FETCH_COMPETITION
  payload: number
}

export interface LoadLeagueDone {
  type: LeagueActions.FETCH_COMPETITION_DONE
  payload: Standing
}

export type LeagueAction = LoadLeague | LoadLeagueDone

export function loadLeague(id: number): LoadLeague {
  return {
    type: LeagueActions.FETCH_COMPETITION,
    payload: id
  }
}

export function loadLeagueDone(league: Standing): LoadLeagueDone {
  return {
    type: LeagueActions.FETCH_COMPETITION_DONE,
    payload: league
  }
}

export function loadLeagueEpic(action$: any) {
  return action$
    .ofType(LeagueActions.FETCH_COMPETITION)
    .switchMap((action: LoadLeague) =>
      api.fetchLeague(action.payload).map((data: LeagueData) =>
        loadLeagueDone({
          id: action.payload,
          data
        })
      )
    )
}
