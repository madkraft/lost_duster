import React from "react";
import { Route } from "react-router-dom";

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
  </div>
);
    // <Redirect from="/" exact to="/competitions/445/leagueTable" />

export default App;
