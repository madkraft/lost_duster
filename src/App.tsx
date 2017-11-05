import * as React from 'react'
import { Route } from 'react-router-dom'

import LeaguePage from './containers/LeaguePage'
import FixtureList from './components/FixtureList'
import CompetitionMenu from './components/CompetitionMenu'

const App = () => (
  <div className="ui container">
    <CompetitionMenu />
    <Route
      path="/competitions/:leagueId/leagueTable"
      exact={true}
      component={LeaguePage}
    />
    <Route
      path="/competitions/:leagueId/fixtures"
      exact={true}
      component={FixtureList}
    />
  </div>
)
// <Redirect from="/" exact to="/competitions/445/leagueTable" />

export default App
