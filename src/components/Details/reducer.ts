import { SET_DETAILS, CLEAR_DETAILS } from "./actionType";

const initialState = {
  isSelected: false,
  river: null
};

const setRiver = (state: any, action: any) => ({
  ...state,
  isSelected: true,
  river: action.payload
});

const clearDetails = (state: any) => ({
  ...state,
  isSelected: false
});

const actionMap: { [key: string]: any } = {
  [SET_DETAILS]: setRiver,
  [CLEAR_DETAILS]: clearDetails
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
