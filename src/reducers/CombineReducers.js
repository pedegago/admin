import { combineReducers } from "redux";

// import * as dataReducers from "./DataReducers";
import { uiReducers } from "./UiReducers";

const CombineReducers = combineReducers({
    ui: uiReducers
});

export default CombineReducers;
