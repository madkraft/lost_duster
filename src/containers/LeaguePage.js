import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import CompetitionMenu from "../components/CompetitionMenu";
import api from "../services/api";

class HomePage extends Component {
  componentWillMount() {
    api.fetch.league(450, "leagueTable").then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <CompetitionMenu />
        <Table basic="very" unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Employee</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
              <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>Team1</Table.Cell>
              <Table.Cell>Team1</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>15</Table.Cell>
              <Table.Cell>Team2</Table.Cell>
              <Table.Cell>Team2</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>Team3</Table.Cell>
              <Table.Cell>Team3</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>11</Table.Cell>
              <Table.Cell>Team3</Table.Cell>
              <Table.Cell>Team3</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default HomePage;
