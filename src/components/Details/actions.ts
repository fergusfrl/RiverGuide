import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import {
  SET_DETAILS,
  CLEAR_DETAILS,
  FLOW_LOADING,
  HISTORICAL_FLOW_ERROR,
  SET_HISTORICAL_FLOW,
  NOT_FLOW_LOADING
} from "./actionType";

export const setDetails = (river: any) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: SET_DETAILS,
    payload: river
  });
};

export const clearDetails = () => (dispatch: ThunkDispatch<{}, {}, any>) => {
  dispatch({ type: CLEAR_DETAILS });
};

export const getHistoricalRiverData = (gauge_id: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({ type: FLOW_LOADING });
  axios
    .post("https://www.openriverdata.com/", {
      action: "get_flows",
      crossDomain: true,
      id: [gauge_id]
    })
    .then(res => {
      dispatch({
        type: SET_HISTORICAL_FLOW,
        payload: {
          flows: res.data.flows.slice(1, 2000),
          last_updated: res.data.last_updated
        }
      });
    })
    .catch(err => {
      dispatch({ type: HISTORICAL_FLOW_ERROR });
      console.log("Historical Flow Error", err);
    })
    .finally(() => {
      dispatch({ type: NOT_FLOW_LOADING });
    });
};
