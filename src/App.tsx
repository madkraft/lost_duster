import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

import LeaguePage from './containers/LeaguePage'
import FixturePage from './containers/FixturePage'
import TodayGamesPage from './containers/TodayGamesPage'
import CompetitionMenu from './components/CompetitionMenu'
import News from './components/News'

const App = () => (
  <div className="ui container">
    <CompetitionMenu />
    <Route path="/" exact={true} component={News} />
    <Route path="/matches" exact={true} component={TodayGamesPage} />
    <Route
      path="/competitions/:leagueId/leagueTable"
      exact={true}
      component={LeaguePage}
    />
    <Route
      path="/competitions/:leagueId/fixtures/:matchday"
      exact={true}
      component={FixturePage}
    />

    <Route
      exact={true}
      path="/competitions/:leagueId/fixtures"
      render={props => (
        <Redirect
          to={`/competitions/${props.match.params.leagueId}/leagueTable`}
        />
      )}
    />
  </div>
)

export default App
