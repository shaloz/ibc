import authModalReducer from "./authModalReducer";
import headerReducer from "./headerReducer";
import {userLocationReducer,userDetailsReducer } from "./userReducer";
import {applicationConfigurationReducer} from './ApplicationReducer'
import { combineReducers } from "redux";

export default combineReducers({
  authModalReducer,
  headerReducer,
  userReducer: combineReducers({
    userLocation: userLocationReducer,
    userDetails: userDetailsReducer
  }),
  applicationReducer: combineReducers({
    configuration: applicationConfigurationReducer,
  })
});
