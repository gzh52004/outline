import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers'
import rootSaga from './middleware/saga';

// 1. 引入saga
import createSagaMiddleware from 'redux-saga';

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();


 // 3.将 sagaMiddleware 连接至 Store
 let enhancer = applyMiddleware(sagaMiddleware)

// createStore(reducer,initState,middleware)
const store = createStore(reducer,composeWithDevTools(enhancer))

// 4.引入并运行自定义Saga配置（自己编写）
sagaMiddleware.run(rootSaga);

export default store;