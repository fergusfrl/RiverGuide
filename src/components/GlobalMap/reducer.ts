import { SET_CENTER, SET_ZOOM } from "./actionTypes";

const initialState = {
  zoom: 5,
  center: [172.186, -40.5]
};

const setCenter = (state: any, action: any) => ({
  ...state,
  center: action.payload
});

const setZoom = (state: any, action: any) => ({
  ...state,
  zoom: action.payload
});

const actionMap: { [key: string]: any } = {
  [SET_CENTER]: setCenter,
  [SET_ZOOM]: setZoom
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
