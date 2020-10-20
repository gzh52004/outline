import React from 'react';
import { render } from 'react-dom'
import {HashRouter,BrowserRouter,Route} from 'react-router-dom';
import store from '@/store';
import {Provider} from 'react-redux'


import App from './App';

render(
    <Provider store={store}>
        <HashRouter>
            <App />
            {/* <Route component={App}/> */}
        </HashRouter>
    </Provider>
    ,
    document.getElementById('app')
)