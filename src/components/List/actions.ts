import { ThunkDispatch } from "redux-thunk";
import axios from "axios";

import {
  LOADING,
  SET_ALL_RIVERS,
  NOT_LOADING,
  ERROR,
  LOADING_TELE,
  NOT_LOADING_TELE,
  SET_TELE,
  TELE_ERROR
} from "./actionTypes";

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

export const getTelemetryData = () => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({ type: LOADING_TELE });
  axios
    .post("https://www.openriverdata.com/", {
      action: "get_features",
      crossDomain: true,
      filters: ["flow", "stage_height"]
    })
    .then(res => dispatch({ type: SET_TELE, payload: res.data.features }))
    .catch(err => {
      dispatch({ type: TELE_ERROR });
      console.log("Could not get telemetry data\n", err);
    })
    .finally(() => dispatch({ type: NOT_LOADING_TELE }));
};
