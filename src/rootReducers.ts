import { combineReducers } from "redux";

import { ListReducer } from "./components/List";
import { DetailsReducer } from "./components/Details";
import { FiltersReducer } from "./components/FilterPanel";

export default combineReducers({
  rivers: ListReducer,
  details: DetailsReducer,
  filters: FiltersReducer
});
