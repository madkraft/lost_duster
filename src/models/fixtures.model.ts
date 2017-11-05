import { HrefLink, Links } from './common.model'

export interface FixtureResult {
  goalsAwayTeam: number
  goalsHomeTeam: number
  halfTime: {
    goalsAwayTeam: number
    goalsHomeTeam: number
  }
}

export interface FixtureData {
  awayTeamName: string
  date: string
  homeTeamName: string
  matchday: number
  odds: null
  result: FixtureResult
  status: string
  _links: {
    self: HrefLink
    competition: HrefLink
    awayTeam: HrefLink
    homeTeam: HrefLink
  }
}

export interface FixturesResponse {
  _links: Links
  count: number
  fixtures: FixtureData[]
}
