import { FixtureData } from '../models/fixtures.model'
import * as React from 'react'
import { style } from 'typestyle'

const fixture = style({
  display: 'flex',
  alignItems: 'center'
})

const won = (teamScore: number, adversaryScore: number) =>
  style({
    fontWeight: teamScore > adversaryScore ? 'bold' : 'normal'
  })

const homeTeam = style({
  marginBottom: '1rem'
})

const status = style({
  marginRight: '1rem'
})

export interface FixtureProps {
  result: FixtureData
}

const Fixture: React.StatelessComponent<FixtureProps> = ({ result }) => (
  <div className={fixture}>
    <div className={status}>{result.status}</div>
    <div>
      <div
        className={[
          homeTeam,
          won(result.result.goalsHomeTeam, result.result.goalsAwayTeam)
        ].join(' ')}
      >
        {result.result.goalsHomeTeam} {result.homeTeamName}
      </div>
      <div
        className={won(
          result.result.goalsAwayTeam,
          result.result.goalsHomeTeam
        )}
      >
        {result.result.goalsAwayTeam} {result.awayTeamName}
      </div>
    </div>
  </div>
)

export default Fixture
