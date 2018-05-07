import { combineReducers } from "redux";
import ExclusiveItem from "../components/exclusiveItem/reducer";

const  lastAction = (state = null, action) => {
    return action;
}

const rootReducer = combineReducers({
  exclusiveItem: ExclusiveItem
});

export default rootReducer;
