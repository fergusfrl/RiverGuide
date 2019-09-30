import { ThunkDispatch } from "redux-thunk";
import axios from "axios";

import { LOADING, SET_ALL_RIVERS, NOT_LOADING, ERROR } from "./actionTypes";

export const getRiverList = () => (dispatch: ThunkDispatch<{}, {}, any>) => {
  dispatch({ type: LOADING });
  axios
    .get("https://api.riverguide.co.nz/guides?_limit=999")
    .then(res => dispatch({ type: SET_ALL_RIVERS, payload: res.data }))
    .catch(err => {
      dispatch({ type: ERROR });
      console.log("Could not get rivers\n", err);
    })
    .finally(() => dispatch({ type: NOT_LOADING }));
};
