import { ThunkDispatch } from "redux-thunk";
import { SET_DETAILS, CLEAR_DETAILS } from "./actionType";

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
