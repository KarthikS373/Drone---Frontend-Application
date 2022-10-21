import { createStore, combineReducers } from "redux";
import PermissionsReducer from "./permissions";

const rootReducer = combineReducers({
  permissions: PermissionsReducer,
});

export const store = createStore(rootReducer);
