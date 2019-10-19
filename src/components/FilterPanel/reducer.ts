import {
  SET_FILTER_VALUES,
  CLEAR_VALUES,
  CLEAR_ALL_VALUES
} from "./actionTypes";

const initialState = {
  grade: {
    values: [1, 2, 3, 4, 5, "5+"],
    activeValues: []
  }
};

const activateValues = (state: any, action: any) => ({
  ...state,
  [action.payload.attribute]: {
    ...state[action.payload.attribute],
    activeValues: action.payload.values
  }
});

const clearValues = (state: any, action: any) => ({
  ...state,
  [action.payload]: {
    ...[state[action.payload]],
    activeValues: []
  }
});

const clearAllValues = () => ({
  ...initialState
});

const actionMap: { [key: string]: any } = {
  [SET_FILTER_VALUES]: activateValues,
  [CLEAR_VALUES]: clearValues,
  [CLEAR_ALL_VALUES]: clearAllValues
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
