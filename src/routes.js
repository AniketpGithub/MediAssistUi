import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

import Home from './Home';
import Appointment from './pages/Appointment';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/register"  component={Register} />
                <Route path="/Login"  component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/appointment"  component={Appointment} />
                
            </Switch>
        </BrowserRouter>
    );
}