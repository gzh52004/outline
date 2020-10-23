import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'
import App from './App'

import './App.scss'

// 根据环境不同切换不同的路由模式
// process.env.NODE_ENV： development, production
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
)