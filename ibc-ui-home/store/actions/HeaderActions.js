import { HANDLE_NOTIFICATION_MENU, HANDLE_PROFILE_MENU } from "../types";


export const handleNotificationMenu = (status) => {
    return async (dispatch, getState) => {
      dispatch({
        type: HANDLE_NOTIFICATION_MENU,
        payload: status
      })
    }
  }

  export const handleProfileMenu = (status) => {
    return async (dispatch, getState) => {
      dispatch({
        type: HANDLE_PROFILE_MENU,
        payload: status
      })
    }
  }