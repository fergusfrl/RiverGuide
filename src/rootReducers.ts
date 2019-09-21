import { combineReducers } from "redux";

// reducers
import { ListReducer } from "./components/List";

export default combineReducers({
  rivers: ListReducer
});
