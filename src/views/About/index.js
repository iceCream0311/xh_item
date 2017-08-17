import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Main from './Main'

export default class About extends Component {
    render() {
        return (
          <router>
            <span>我是一个大好人</span>
            <ul>
              <li><Link to="/main">tag</Link></li>
            </ul>
             <Route path="/main" component={Main}></Route>
          </router>

        )
    }
}