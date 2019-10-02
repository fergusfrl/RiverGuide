import { LOADING, NOT_LOADING, SET_ALL_RIVERS, ERROR } from "./actionTypes";
import { FILTER_RIVERS } from "../ListHeader/actionTypes";

const initialState = {
  allRivers: [],
  rivers: [],
  loading: false,
  error: false
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
  rivers: action.payload,
  allRivers: action.payload
});

const filterRivers = (state: any, action: any) => ({
  ...state,
  rivers: state.allRivers.filter(
    (river: any) =>
      river.region.toLowerCase().includes(action.payload.toLowerCase()) ||
      river.river_name.toLowerCase().includes(action.payload.toLowerCase()) ||
      river.section_name.toLowerCase().includes(action.payload.toLowerCase())
  )
});

const actionMap: { [key: string]: any } = {
  [LOADING]: isLoading,
  [NOT_LOADING]: isNotLoading,
  [ERROR]: error,
  [SET_ALL_RIVERS]: setAllRivers,
  [FILTER_RIVERS]: filterRivers
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
