import { ThunkDispatch } from "redux-thunk";
import { FILTER_RIVERS, CLEAR_ALL_FILTERS, CLEAR_VALUES } from "./actionTypes";

export const toggleItem = (value: number) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: FILTER_RIVERS,
    payload: {
      attribute: "grade",
      value
    }
  });
};

export const clearFilters = (attribute: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: CLEAR_VALUES,
    payload: attribute.toLowerCase()
  });
};

export const clearAllFilters = () => (dispatch: ThunkDispatch<{}, {}, any>) => {
  dispatch({ type: CLEAR_ALL_FILTERS });
};
