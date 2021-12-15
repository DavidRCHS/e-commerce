import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from '../views/Home';
import signup from '../views/Signup';
import login from '../views/Login';
import item from '../views/Item';
import Navbar from '../components/Navbar';
export default function Routes() {
    return <Router>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/Signup" component={signup} />
            <Route exact path="/Login" component={login} />
            <Route exact path="/Item" component={item} />
        </Switch>
    </Router>
}
