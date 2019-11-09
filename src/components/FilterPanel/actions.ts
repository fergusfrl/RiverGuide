import { ThunkDispatch } from "redux-thunk";
import { FILTER_RIVERS, CLEAR_ALL_FILTERS, CLEAR_VALUES } from "./actionTypes";

export const toggleItem = (attribute: string, value: number) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: FILTER_RIVERS,
    payload: {
      attribute,
      value
    }
  });
};

export const clearFilters = (attribute: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: CLEAR_VALUES,
    payload: attribute
  });
};

export const clearAllFilters = () => (dispatch: ThunkDispatch<{}, {}, any>) => {
  dispatch({ type: CLEAR_ALL_FILTERS });
};
