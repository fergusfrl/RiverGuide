import { LOADING, NOT_LOADING, SET_ALL_RIVERS, ERROR } from "./actionTypes";

const initialState = {
  rivers: [],
  loading: false,
  error: false
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case NOT_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_ALL_RIVERS:
      return {
        ...state,
        rivers: action.payload
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
