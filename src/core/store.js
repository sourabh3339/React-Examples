import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";


import reducers from "./root-reducer";
export const Store = createStore(reducers);
