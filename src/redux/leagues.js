import api from "../services/api";
import { setLoadedLeagues, changeLoadedStatus } from "../services/utils";
import { SELECTED_LEAGUES } from "../constants";

const FETCH_COMPETITION = "leagues/FETCH_COMPETITION";
const FETCH_COMPETITION_DONE = "leagues/FETCH_COMPETITION_DONE";

const initialState = {
  selectedLeagues: SELECTED_LEAGUES,
  status: setLoadedLeagues(SELECTED_LEAGUES, false),
  standings: []
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_COMPETITION:
      return state;
    case FETCH_COMPETITION_DONE:
      return {
        ...state,
        status: changeLoadedStatus(state.status, action.payload.id),
        standings: [
          ...state.standings,
          { id: action.payload.id, data: action.payload.data }
        ]
      };
    default:
      return state;
  }
}

export function loadLeague(id) {
  return {
    type: FETCH_COMPETITION,
    payload: id
  };
}

export function loadLeagueDone(league) {
  return {
    type: FETCH_COMPETITION_DONE,
    payload: league
  };
}

export function loadLeagueEpic(action$) {
  return action$.ofType(FETCH_COMPETITION).switchMap(action =>
    api.fetchLeague(action.payload).map(data =>
      loadLeagueDone({
        id: action.payload,
        data
      })
    )
  );
}
