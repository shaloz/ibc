import InitialState from "./initialState";
import { HANDLE_GET_USER_DEFAULT_LOCATION, HANDLE_GET_USER_DETAILS } from "../types";

export const userLocationReducer = (state = InitialState.user.userLocation, action) => {
  switch (action.type) {
    case HANDLE_GET_USER_DEFAULT_LOCATION:
      return action.payload;
    default:
      return state;
  }
};


export const userDetailsReducer = (state = InitialState.user.userDetails, action) => {
  switch (action.type) {
    case HANDLE_GET_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};
