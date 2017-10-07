import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class CompetitionMenu extends Component {
  state = { activeItem: "standings" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary fluid widths={2}>
        <Menu.Item
          as={Link}
          to="/competitions/424/leagueTable"
          name="standings"
          active={activeItem === "standings"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/competitions/424/fixtures"
          name="fixtures"
          active={activeItem === "fixtures"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
