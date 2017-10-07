import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import LeaguePage from './containers/LeaguePage';
import LoginPage from './containers/LoginPage';

const App = () => (
  <div className="ui container">
    <Route
      path="/competitions/:leagueId/leagueTable"
      exact
      component={LeaguePage}
    />
    <Route
      path="/competitions/:leagueId/fixtures"
      exact
      component={LoginPage}
    />
    <Redirect from="/" exact to="/competitions/424/leagueTable" />
  </div>
);

export default App;
