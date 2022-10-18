import { HANDLE_APPLICATION_CONFIGURATION, HANDLE_APPLICATION_ISLOGGEDIN } from "../types";
import InitialState from "./initialState";

export const applicationConfigurationReducer = (state = InitialState.application.configuration, action) => {
  switch (action.type) {
    case HANDLE_APPLICATION_CONFIGURATION:
      return action.payload
    default:
      return state;
  }
};


 
// export const applicationIsLoggedInReducer = (state = InitialState.application.isLoggedIn, action) => {
//   switch (action.type) {
//     case HANDLE_APPLICATION_ISLOGGEDIN:
//       return  action.payload
//     default:
//       return state;
//   }
// };

 