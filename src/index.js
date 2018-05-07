
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Route from './app/route'
import {Store} from './core/store'

function AppMainDom() {
    
    return (
        <Provider store={Store}>
        <div>
            <Route/>
        </div>
        </Provider>

    )
} 

   
ReactDOM.render(
    <AppMainDom />,
    document.querySelector(".container")
);

