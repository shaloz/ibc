import authModalReducer from "./authModalReducer";
import headerReducer from "./headerReducer";
import { applicationConfigurationReducer, applicationUserReducer } from "./ApplicationReducer";
import { combineReducers } from "redux";

export default combineReducers({
  authModalReducer,
  headerReducer,
  applicationReducer: combineReducers({
    configuration: applicationConfigurationReducer,
    user: applicationUserReducer
  }),
});
