import InitialState from "./initialState";
import { HANDLE_CREATE_ACCOUNT_MODAL } from "../types";

const AuthModalReducer = (state = InitialState.openNewAccountModal, action) => {
  switch (action.type) {
    case HANDLE_CREATE_ACCOUNT_MODAL:
      return {
        openNewAccountModal: action.payload,
      };
    default:
      return state;
  }
};

export default AuthModalReducer 