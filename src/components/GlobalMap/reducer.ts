import { SET_CENTER, SET_ZOOM, SET_LAYER, SET_PITCH } from "./actionTypes";

const initialState = {
  zoom: 5,
  center: [172.186, -40.5],
  layer: false,
  pitch: 0
};

const setCenter = (state: any, action: any) => ({
  ...state,
  center: action.payload
});

const setZoom = (state: any, action: any) => ({
  ...state,
  zoom: action.payload
});

const setLayer = (state: any, action: any) => ({
  ...state,
  layer: action.payload
});

const setPitch = (state: any, action: any) => ({
  ...state,
  pitch: action.payload
});

const actionMap: { [key: string]: any } = {
  [SET_CENTER]: setCenter,
  [SET_ZOOM]: setZoom,
  [SET_LAYER]: setLayer,
  [SET_PITCH]: setPitch
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
