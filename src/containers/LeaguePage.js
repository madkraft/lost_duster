import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { pathOr } from "ramda";
import { loadLeague } from "../redux/leagues";
import { TABLE_FIELDS } from "../constants";

class LeaguePage extends Component {
  componentWillMount() {
    const currentLeague = parseInt(this.props.match.params.leagueId, 10);
    if (this.props.status) {
      const leagueStatus = this.props.status.find(
        league => league.id === currentLeague
      );
      if (leagueStatus.loaded) {
        return;
      }
    }
    this.props.loadLeague(currentLeague);
  }

  render() {
    const data = pathOr({}, ["data"], this.props);
    const { leagueCaption, matchday } = data;
    const standing = data.standing || [];

    return (
      <div>
        <h1>{leagueCaption}</h1>
        <p>Matchday {matchday}</p>
        <Table basic="very" unstackable>
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
            {standing.map(place => (
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
    );
  }
}

function mapState(state) {
  const league = state.leagues.standings.find(
    league => league.id === state.leagues.currentLeague
  );
  if (league) {
    return {
      data: league.data,
      status: state.leagues.status
    };
  }
  return {};
}

function mapDispatch(dispatch) {
  return {
    loadLeague: id => dispatch(loadLeague(id))
  };
}

export default connect(mapState, mapDispatch)(LeaguePage);
