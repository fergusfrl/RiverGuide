import {
  SET_DETAILS,
  CLEAR_DETAILS,
  FLOW_LOADING,
  HISTORICAL_FLOW_ERROR,
  NOT_FLOW_LOADING,
  SET_HISTORICAL_FLOW
} from "./actionType";

const initialState = {
  isSelected: false,
  river: null,
  isFlowLoading: false,
  historicalFlowError: false,
  historicalFlow: [],
  lastUpdatedHistroicalFlow: ""
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

const isFlowLoading = (state: any) => ({
  ...state,
  isFlowLoading: true
});

const isNotFlowLoading = (state: any) => ({
  ...state,
  isFlowLoading: false
});

const flowError = (state: any) => ({
  ...state,
  historicalFlowError: true
});

const setHistoricalFlow = (state: any, action: any) => ({
  ...state,
  historicalFlow: action.payload.flows,
  lastUpdatedHistroicalFlow: action.payload.last_updated
});

const actionMap: { [key: string]: any } = {
  [SET_DETAILS]: setRiver,
  [CLEAR_DETAILS]: clearDetails,
  [FLOW_LOADING]: isFlowLoading,
  [NOT_FLOW_LOADING]: isNotFlowLoading,
  [HISTORICAL_FLOW_ERROR]: flowError,
  [SET_HISTORICAL_FLOW]: setHistoricalFlow
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
