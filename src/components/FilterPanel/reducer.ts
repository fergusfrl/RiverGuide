import { FILTER_RIVERS, CLEAR_VALUES, CLEAR_ALL_FILTERS } from "./actionTypes";

const initialState = {
  grade: {
    availableValues: [
      { display: "Class 1", value: 1 },
      { display: "Class 2", value: 2 },
      { display: "Class 3", value: 3 },
      { display: "Class 4", value: 4 },
      { display: "Class 5", value: 5 }
    ],
    activeValues: []
  }
};

const toggleValues = (state: any, action: any) => {
  const attr = action.payload.attribute;
  const payloadValue = action.payload.value;
  const activeValues = state[attr].activeValues;

  const val = activeValues.includes(payloadValue)
    ? activeValues.filter((v: number) => v !== payloadValue)
    : [payloadValue, ...activeValues];

  return {
    ...state,
    [attr]: {
      ...state[attr],
      activeValues: val
    }
  };
};

const clearValues = (state: any, action: any) => {
  const attr = action.payload;
  return {
    ...state,
    [attr]: {
      ...state[attr],
      activeValues: []
    }
  };
};

const clearAllValues = () => ({
  ...initialState
});

const actionMap: { [key: string]: any } = {
  [FILTER_RIVERS]: toggleValues,
  [CLEAR_VALUES]: clearValues,
  [CLEAR_ALL_FILTERS]: clearAllValues
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
