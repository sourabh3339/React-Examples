
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Route from './app/route'


function AppMainDom() {
    
    return (
        <div>
            <Route/>
        </div>

    )
} 

   
ReactDOM.render(
    <AppMainDom />,
    document.querySelector(".container")
);

