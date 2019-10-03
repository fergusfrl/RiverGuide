import { ThunkDispatch } from "redux-thunk";

import { SEARCH_RIVERS } from "./actionTypes";

export const searchRivers = (searchString: string) => (
  dispatch: ThunkDispatch<{}, {}, any>
) => {
  dispatch({
    type: SEARCH_RIVERS,
    payload: searchString
  });
};
