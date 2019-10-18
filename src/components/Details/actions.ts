import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import {
  SET_DETAILS,
  CLEAR_DETAILS,
  FLOW_LOADING,
  HISTORICAL_FLOW_ERROR,
  SET_HISTORICAL_FLOW,
  NOT_FLOW_LOADING,
  WEATHER_ERROR,
  WEATHER_LOADING,
  NOT_WEATHER_LOADING,
  SET_WEATHER
} from "./actionType";

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

export const getHistoricalRiverData = (gauge_id: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({ type: FLOW_LOADING });
  axios
    .post("https://www.openriverdata.com/", {
      action: "get_flows",
      crossDomain: true,
      id: [gauge_id]
    })
    .then(res => {
      dispatch({
        type: SET_HISTORICAL_FLOW,
        payload: {
          flows: res.data.flows.slice(1, 2000),
          last_updated: res.data.last_updated
        }
      });
    })
    .catch(err => {
      dispatch({ type: HISTORICAL_FLOW_ERROR });
      console.log("Historical Flow Error", err);
    })
    .finally(() => {
      dispatch({ type: NOT_FLOW_LOADING });
    });
};

export const getWeatherData = (lat: any, lon: any) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({ type: WEATHER_LOADING });
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&mode=json&APPID=521cea2fce8675d0fe0678216dc01d5c`
    )
    .then(res => {
      dispatch({
        type: SET_WEATHER,
        payload: {
          data: {
            temp: res.data.main.temp.toFixed(0),
            description: res.data.weather[0].description,
            sunrise: res.data.sys.sunrise,
            sunset: res.data.sys.sunset,
            iconCode: res.data.weather[0].icon
          },
          lastUpdated: res.data.dt
        }
      });
    })
    .catch(err => {
      console.log(`Error loading weather data:\n${err}`);
      dispatch({ type: WEATHER_ERROR });
    })
    .finally(() => {
      dispatch({ type: NOT_WEATHER_LOADING });
    });
};
