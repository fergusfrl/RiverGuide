import { ThunkDispatch } from "redux-thunk";
import { SET_CENTER, SET_ZOOM, SET_LAYER, SET_PITCH } from "./actionTypes";

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

export const setLayer = (isSatellite: boolean) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: SET_LAYER,
    payload: isSatellite
  });
};

export const setPitch = (pitch: number) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: SET_PITCH,
    payload: pitch
  });
};
