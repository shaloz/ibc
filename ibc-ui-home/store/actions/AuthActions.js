import { HANDLE_CREATE_ACCOUNT_MODAL } from "../types";

export const handleAuthModal = (payload) => {
  return async (dispatch, getState) => {
    dispatch({
      type: HANDLE_CREATE_ACCOUNT_MODAL,
      payload,
    });
  };
};


