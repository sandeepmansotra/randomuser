import { BANK_BRANCH } from "../actions";
import { combineReducers } from "redux";

function users(state = [], action) {
  switch (action.type) {
    case BANK_BRANCH:
      return action.branches;
    default:
      return state;
  }
}

const rootReducers = combineReducers({ users });
export default rootReducers;
