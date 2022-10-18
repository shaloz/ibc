import { HANDLE_APPLICATION_CONFIGURATION, HANDLE_APPLICATION_USER } from "../types";
import { getCookie } from "../../helpers/utils";

export const handleApplicationConfiguration = (data) => {
  return (dispatch) => {
    dispatch({ type: HANDLE_APPLICATION_CONFIGURATION, payload: data });
  };
};


export const handleUserDetails = (data) => {
  return (dispatch) => {
    dispatch({ type: HANDLE_APPLICATION_USER, payload: data });
  };
};
