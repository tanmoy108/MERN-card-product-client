import { combineReducers } from "redux";
import { stateReducer } from "./state/stateReducer";

const RootStore = combineReducers({
  stateObj: stateReducer,

});

export default RootStore;