import * as React from 'react'
import { pathOr } from 'ramda'
import { Table } from 'semantic-ui-react'

import { TABLE_FIELDS } from '../constants'
import { LeagueData, LeagueStatus } from '../models'

export interface LeaguePageProps {
  data: LeagueData
  loadLeague: Function
  status: LeagueStatus[]
  match: {
    params: {
      leagueId: string
    }
  }
}

// move menu inside and trigger leagueId as a current league and fixtures with current matchday

class League extends React.Component<LeaguePageProps, {}> {
  componentWillMount() {
    const currentLeague = parseInt(this.props.match.params.leagueId, 10)
    if (this.props.status) {
      const leagueStatus = this.props.status.find(
        (league: LeagueStatus) => league.id === currentLeague
      )
      if (leagueStatus && leagueStatus.loaded) {
        return
      }
    }
    this.props.loadLeague(currentLeague)
  }

  render() {
    const data: LeagueData = pathOr({}, ['data'], this.props)
    const { leagueCaption, matchday } = data
    const standing = data.standing || []

    return (
      <div>
        <h1>{leagueCaption}</h1>
        <p>Matchday {matchday}</p>
        <Table basic="very" unstackable={true}>
          <Table.Header>
            <Table.Row>
              {TABLE_FIELDS.map(field => (
                <Table.HeaderCell key={field.field}>
                  {field.label}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {standing.map((place: any) => (
              <Table.Row key={place.position}>
                {TABLE_FIELDS.map(column => (
                  <Table.Cell key={column.field}>
                    {place[column.field]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default League
