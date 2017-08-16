import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/App/App'
import Routers from './router/router';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Routers />, document.getElementById('root'))
registerServiceWorker()
