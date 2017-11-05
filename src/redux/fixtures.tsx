import { FixtureData } from '../models/fixtures.model'
import { Observable } from 'rxjs/Rx'
import { FixturesResponse } from '../models'
import api from '../services/api'

export enum FixtureActions {
  FETCH_FIXTURES = 'fixtures/FETCH_FIXTURES',
  FETCH_FIXTURES_DONE = 'fixtures/FETCH_FIXTURES_DONE'
}

export type FixtureAction = LoadFixtures | LoadFixturesDone

export interface LoadFixtures {
  type: FixtureActions.FETCH_FIXTURES
  payload: {
    id: number
    matchday: number
  }
}

export interface LoadFixturesDone {
  type: FixtureActions.FETCH_FIXTURES_DONE
  payload: FixturesResponse
}

export interface FixturesState {
  fixtures: FixtureData[]
}

export const fixtureState: FixturesState = {
  fixtures: []
}

export function fixturesReducer(
  state: FixturesState = fixtureState,
  action: any
) {
  switch (action.type) {
    case FixtureActions.FETCH_FIXTURES:
      return state
    case FixtureActions.FETCH_FIXTURES_DONE:
      console.log(action)
      return {
        ...state,
        fixtures: action.payload.fixtures
      }
    default:
      return state
  }
}

export function loadFixtures(id: number, matchday: number): LoadFixtures {
  return {
    type: FixtureActions.FETCH_FIXTURES,
    payload: {
      id,
      matchday
    }
  }
}

export function loadFixturesDone(fixtures: FixturesResponse): LoadFixturesDone {
  return {
    type: FixtureActions.FETCH_FIXTURES_DONE,
    payload: fixtures
  }
}

export function loadFixturesEpic(action$: any) {
  return action$
    .ofType(FixtureActions.FETCH_FIXTURES)
    .switchMap((action: LoadFixtures) =>
      api
        .fetchFixture(action.payload.id, action.payload.matchday)
        .map((data: FixturesResponse) => loadFixturesDone(data))
    )
}
