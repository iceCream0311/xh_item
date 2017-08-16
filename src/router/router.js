import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, {Component} from 'react'
import App from '../views/App/App'
import About from '../views/About/index';

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/tag"></Route>
                </div>
            </Router>
        )
    }
}