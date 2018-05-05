import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from '../components/mainPage'

function routes() {
    return (
        <div>
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                    </Switch>
            </BrowserRouter>
        </div>
    )
}

export default routes
