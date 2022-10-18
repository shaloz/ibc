import { HANDLE_APPLICATION_CONFIGURATION, HANDLE_APPLICATION_USER } from "../types";
import InitialState from "./initialState";

export const applicationConfigurationReducer = (state = InitialState.application.configuration, action) => {
  switch (action.type) {
    case HANDLE_APPLICATION_CONFIGURATION:
      return  action.payload
    default:
      return state;
  }
};


 
export const applicationUserReducer = (state = InitialState.application.user, action) => {
  switch (action.type) {
    case HANDLE_APPLICATION_USER:
      return  action.payload
    default:
      return state;
  }
};

 