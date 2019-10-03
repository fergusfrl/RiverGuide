import { LOADING, NOT_LOADING, SET_ALL_RIVERS, ERROR } from "./actionTypes";
import { SEARCH_RIVERS } from "../ListHeader/actionTypes";
import { FILTER_RIVERS } from "../FilterPanel/actionTypes";

const initialState = {
  rivers: [],
  loading: false,
  error: false,
  searchStr: "",
  filters: {}
};

const isLoading = (state: any) => ({
  ...state,
  loading: true
});

const isNotLoading = (state: any) => ({
  ...state,
  loading: false
});

const error = (state: any) => ({
  ...state,
  loading: false,
  error: true
});

const setAllRivers = (state: any, action: any) => ({
  ...state,
  rivers: action.payload
});

const setSearchStr = (state: any, action: any) => ({
  ...state,
  searchStr: action.payload.toLowerCase()
});

const setFilters = (state: any, action: any) => ({
  ...state,
  filters: action.payload
});

const actionMap: { [key: string]: any } = {
  [LOADING]: isLoading,
  [NOT_LOADING]: isNotLoading,
  [ERROR]: error,
  [SET_ALL_RIVERS]: setAllRivers,
  [SEARCH_RIVERS]: setSearchStr,
  [FILTER_RIVERS]: setFilters
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
