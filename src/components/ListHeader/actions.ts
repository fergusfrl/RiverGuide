import { ThunkDispatch } from "redux-thunk";

import { FILTER_RIVERS } from "./actionTypes";

export const searchRivers = (searchString: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: FILTER_RIVERS,
    payload: searchString
  });
};
