import {
  LOADING,
  NOT_LOADING,
  SET_ALL_RIVERS,
  ERROR,
  SET_TELE,
  TELE_ERROR,
  NOT_LOADING_TELE,
  LOADING_TELE
} from "./actionTypes";
import { SEARCH_RIVERS } from "../ListHeader/actionTypes";
import { FILTER_RIVERS } from "../FilterPanel/actionTypes";

const initialState = {
  rivers: [],
  loading: false,
  error: false,
  searchStr: "",
  filters: {},
  telemeteryData: [],
  loadingTele: false,
  teleError: false
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

const setTelemeteryData = (state: any, action: any) => ({
  ...state,
  telemeteryData: action.payload
});

const isLoadingTele = (state: any) => ({
  ...state,
  loadingTele: true
});

const isNotLoadingTele = (state: any) => ({
  ...state,
  loadingTele: false
});

const teleError = (state: any) => ({
  ...state,
  teleError: true
});

const actionMap: { [key: string]: any } = {
  [LOADING]: isLoading,
  [NOT_LOADING]: isNotLoading,
  [ERROR]: error,
  [SET_ALL_RIVERS]: setAllRivers,
  [SEARCH_RIVERS]: setSearchStr,
  [FILTER_RIVERS]: setFilters,
  [SET_TELE]: setTelemeteryData,
  [TELE_ERROR]: teleError,
  [LOADING_TELE]: isLoadingTele,
  [NOT_LOADING_TELE]: isNotLoadingTele
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
