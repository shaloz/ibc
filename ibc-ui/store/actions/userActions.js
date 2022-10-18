import { HANDLE_GET_USER_DEFAULT_LOCATION, HANDLE_GET_USER_DETAILS } from "../types";
import countries from "../../helpers/countries";
import axios from "axios";

export const getUser = () => {
  return async (dispatch) => {
    const isLoggedIn = false;

    try {
      if (isLoggedIn) {
      } else {
        const { data } = await axios.get("https://geolocation-db.com/json");
        const country = countries(data.country_name);

        return dispatch({ type: HANDLE_GET_USER_DEFAULT_LOCATION, payload: country });
      }
    } catch (err) {
      return err;
    }
  };
};
