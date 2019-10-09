import { ThunkDispatch } from "redux-thunk";
import { FILTER_RIVERS } from "./actionTypes";

export const filterRivers = () => (dispatch: ThunkDispatch<{}, {}, any>) => {
  dispatch({
    type: FILTER_RIVERS,
    payload: []
  });
};
