import { ThunkDispatch } from "redux-thunk";
import { SET_CENTER, SET_ZOOM } from "./actionTypes";

export const setCenter = (center: number[]) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: SET_CENTER,
    payload: center
  });
};

export const setZoom = (zoom: number) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: SET_ZOOM,
    payload: zoom
  });
};
