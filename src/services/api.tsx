import { Observable } from 'rxjs'

const baseUrl = 'http://api.football-data.org/v1'
const headers = {
  headers: {
    'X-Auth-Token': '6361b22678c9489a837087e19ae65447'
  }
}

function fetchLeague(id: number) {
  const request = fetch(`${baseUrl}/competitions/${id}/leagueTable`, headers)
    .then(res => res.json())
    .catch(err => console.error(err))
  return Observable.fromPromise(request)
}

function fetchFixture(id: number, matchday: number) {
  const request = fetch(
    `${baseUrl}/competitions/${id}/fixtures?matchday=${matchday}`,
    headers
  )
    .then(res => res.json())
    .catch(err => console.error(err))
  return Observable.fromPromise(request)
}

export default {
  fetchLeague,
  fetchFixture
}
