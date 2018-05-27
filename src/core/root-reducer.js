import { combineReducers } from "redux";
import ExclusiveItem from "../components/exclusiveItem/reducer";
import MainPageReducer from "../components/mainPageReducer";

const  lastAction = (state = null, action) => {
    return action;
}

const rootReducer = combineReducers({
  exclusiveItem: ExclusiveItem,
  mainPageReducer:MainPageReducer
});

export default rootReducer;
