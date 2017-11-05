import { Links, HrefLink } from './common.model'

export interface LeagueStatus {
  id: number
  loaded: boolean
}

export interface LeagueData {
  _links: Links
  leagueCaption: string
  matchday: number
  standing: StandingData[]
}

export interface Standing {
  id: number
  data: LeagueData
}

export interface StandingData {
  _links: {
    team: HrefLink
  }
  position: number
  teamName: string
  crestURI: string
  playedGames: number
  points: number
  goals: number
  goalsAgainst: number
  goalDifference: number
  wins: number
  draws: number
  losses: number
  home: Encounter
  away: Encounter
}

export interface Encounter {
  goals: number
  goalsAgainst: number
  wins: number
  draws: number
  losses: number
}
