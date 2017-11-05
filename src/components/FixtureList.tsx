import * as React from 'react'
import { List } from 'semantic-ui-react'
import Fixture from './Fixture'

class FixtureList extends React.Component<{}, {}> {
  render() {
    return (
      <List divided={true} verticalAlign="middle" relaxed="very" size="big">
        <List.Item>
          <List.Content>
            <Fixture message="hello" />
          </List.Content>
        </List.Item>
      </List>
    )
  }
}

export default FixtureList
