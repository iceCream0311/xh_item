import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router'
import './css/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import './css/reset.css';
import './css/index.css';
import App from './App';
import Main from './js/main/Main';
import HomePage from './js/modules/HomePage';
import Cooperation from './js/modules/Cooperation';
import Cases from './js/modules/Cases';
import ContactUs from './js/modules/ContactUs';
let setFontSize = () =>{
    let html = document.documentElement;
    let fontSize = html.clientWidth / 16;
    html.style.fontSize = fontSize + 'px';
    document.addEventListener('DOMContentLoaded', setFontSize, false);
}
setFontSize()
ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/app" component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/cooperation" component={Cooperation} />
      <Route path="/cases" component={Cases} />
      <Route path="/contactus" component={ContactUs} />
      </Route>
      <Route path="/main" component={Main}>
      </Route>
  </Router>
  ),document.getElementById('root'));
