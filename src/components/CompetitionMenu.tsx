import * as React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class CompetitionMenu extends React.Component<{}, {}> {
  state = { activeItem: 'standings' }

  handleItemClick = (e: any, ev: any) => {
    this.setState({ activeItem: ev.name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary={true} fluid={true} widths={2}>
        <Menu.Item
          as={Link}
          to="/competitions/445/leagueTable"
          name="standings"
          active={activeItem === 'standings'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/competitions/445/fixtures"
          name="fixtures"
          active={activeItem === 'fixtures'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
