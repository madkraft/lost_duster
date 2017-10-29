import React from "react";
import { Redirect, Route } from "react-router-dom";

import LeaguePage from "./containers/LeaguePage";
import FixturePage from "./containers/FixturePage";
import CompetitionMenu from "./components/CompetitionMenu";

const App = () => (
  <div className="ui container">
    <CompetitionMenu />
    <Route
      path="/competitions/:leagueId/leagueTable"
      exact
      component={LeaguePage}
    />
    <Route
      path="/competitions/:leagueId/fixtures"
      exact
      component={FixturePage}
    />
    <Redirect from="/" exact to="/competitions/445/leagueTable" />
  </div>
);

export default App;
