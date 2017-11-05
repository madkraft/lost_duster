import * as React from 'react'
import { List } from 'semantic-ui-react'

import { FixtureData } from '../models/fixtures.model'
import Fixture from './Fixture'

export interface FixtureListProps {
  loadFixtures: Function
  matchday: number
  fixtures: FixtureData[]
  match: {
    params: {
      leagueId: string
      matchday: string
    }
  }
}

class FixtureList extends React.Component<FixtureListProps, {}> {
  componentWillMount() {
    const currentLeague = parseInt(this.props.match.params.leagueId, 10)
    const currentMatchday = parseInt(this.props.match.params.matchday, 10)
    this.props.loadFixtures(currentLeague, currentMatchday)
  }

  render() {
    return (
      <List divided={true} verticalAlign="middle" relaxed="very" size="big">
        {this.props.fixtures.map((fixture, index) => (
          <List.Item key={index}>
            <List.Content>
              <Fixture result={fixture} />
            </List.Content>
          </List.Item>
        ))}
      </List>
    )
  }
}

export default FixtureList
