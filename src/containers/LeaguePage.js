import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import CompetitionMenu from "../components/CompetitionMenu";
import { loadLeague } from "../redux/leagues";
import { TABLE_FIELDS } from "../constants";

const CURRENT_LEAGUE = 445;

class HomePage extends Component {
  componentWillMount() {
    this.props.loadLeague(CURRENT_LEAGUE);
  }

  render() {
    const { leagueCaption, matchday } = this.props;
    const standing = this.props.standing || [];

    return (
      <div>
        <CompetitionMenu />
        <h1>{leagueCaption}</h1>
        <p>Matchday {matchday}</p>
        <Table basic="very" unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>PG</Table.HeaderCell>
              <Table.HeaderCell>W</Table.HeaderCell>
              <Table.HeaderCell>D</Table.HeaderCell>
              <Table.HeaderCell>L</Table.HeaderCell>
              <Table.HeaderCell>P</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {standing.map(place => (
              <Table.Row key={place.position}>
                <Table.Cell>{place.position}</Table.Cell>
                <Table.Cell>{place.teamName}</Table.Cell>
                <Table.Cell>{place.playedGames}</Table.Cell>
                <Table.Cell>{place.wins}</Table.Cell>
                <Table.Cell>{place.draws}</Table.Cell>
                <Table.Cell>{place.losses}</Table.Cell>
                <Table.Cell>{place.points}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

function mapState(state) {
  const res = state.leagues.standings.find(
    league => league.id === CURRENT_LEAGUE
  );
  if (res) {
    return res.data;
  }
  return {};
}

function mapDispatch(dispatch) {
  return {
    loadLeague: id => dispatch(loadLeague(id))
  };
}

export default connect(mapState, mapDispatch)(HomePage);
