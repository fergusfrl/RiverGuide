import {
  SET_DETAILS,
  CLEAR_DETAILS,
  FLOW_LOADING,
  HISTORICAL_FLOW_ERROR,
  NOT_FLOW_LOADING,
  SET_HISTORICAL_FLOW,
  WEATHER_ERROR,
  WEATHER_LOADING,
  NOT_WEATHER_LOADING,
  SET_WEATHER
} from "./actionType";

const initialState = {
  isSelected: false,
  river: null,
  isFlowLoading: false,
  historicalFlowError: false,
  historicalFlow: [],
  lastUpdatedHistroicalFlow: "",
  weather: {
    data: {
      temp: "",
      desription: "",
      sunrise: "",
      sunset: "",
      iconCode: ""
    },
    lastUpdated: "",
    loading: false,
    error: false
  }
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

const weatherError = (state: any) => ({
  ...state,
  weather: {
    ...state.weatehr,
    error: true
  }
});

const isWeatherLoading = (state: any) => ({
  ...state,
  weather: {
    ...state.weather,
    loading: true
  }
});

const isNotWeatherLoading = (state: any) => ({
  ...state,
  weather: {
    ...state.weather,
    loading: false
  }
});

const setWeather = (state: any, action: any) => ({
  ...state,
  weather: {
    ...state.weather,
    lastUpdated: action.payload.lastUpdated,
    data: action.payload.data
  }
});

const actionMap: { [key: string]: any } = {
  [SET_DETAILS]: setRiver,
  [CLEAR_DETAILS]: clearDetails,
  [FLOW_LOADING]: isFlowLoading,
  [NOT_FLOW_LOADING]: isNotFlowLoading,
  [HISTORICAL_FLOW_ERROR]: flowError,
  [SET_HISTORICAL_FLOW]: setHistoricalFlow,
  [WEATHER_ERROR]: weatherError,
  [SET_WEATHER]: setWeather,
  [WEATHER_LOADING]: isWeatherLoading,
  [NOT_WEATHER_LOADING]: isNotWeatherLoading
};

export default function(state = initialState, action: any) {
  const method = actionMap[action.type];
  return method ? method(state, action) : state;
}
