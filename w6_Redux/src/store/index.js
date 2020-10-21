import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers'

// 1. 创建仓库
const store = createStore(reducer,composeWithDevTools())



export default store;