import { combineReducers } from "redux";

// reducers
import { ListReducer } from "./components/List";
import { DetailsReducer } from "./components/Details";

export default combineReducers({
  rivers: ListReducer,
  details: DetailsReducer
});
