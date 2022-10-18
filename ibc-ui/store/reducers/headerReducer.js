import InitialState from "./initialState";
import { HANDLE_NOTIFICATION_MENU, HANDLE_PROFILE_MENU } from "../types";

const HeaderReducer = (state = InitialState, action) => {
  switch (action.type) {
    case HANDLE_NOTIFICATION_MENU:
      let notifState = false;
      if (action.payload === "reset") {
        notifState = false;
      } else {
        notifState = !state.toggleNotification;
      }
      return {
        ...state,
        toggleNotification: notifState,
      };
    case HANDLE_PROFILE_MENU:
      let profileState = false;
      if (action.payload === "reset") {
        profileState = false;
      } else {
        profileState = !state.toggleProfile;
      }
      return {
        ...state,
        toggleProfile: profileState,
      };

    default:
      return state;
  }
};

export default HeaderReducer;
