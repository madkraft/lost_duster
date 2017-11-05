import { LeagueStatus } from '../models'

export function setLoadedLeagues(
  selectedLeagues: number[],
  isLoaded: boolean
): LeagueStatus[] {
  return selectedLeagues.map(league => ({
    id: league,
    loaded: isLoaded
  }))
}

export function changeLoadedStatus(
  status: LeagueStatus[],
  newId: number
): LeagueStatus[] {
  return status.map(league => {
    if (league.id === newId) {
      return {
        id: league.id,
        loaded: true
      }
    }
    return league
  })
}
