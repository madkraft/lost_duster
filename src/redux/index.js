import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { loadLeagueEpic, reducer } from "./leagues";

export const rootEpic = combineEpics(loadLeagueEpic);

export const rootReducer = combineReducers({
  leagues: reducer
});
