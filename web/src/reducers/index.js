import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import TestReducer from "./testReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  test: TestReducer
});

export default rootReducer;
