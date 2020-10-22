export function createStore(reducer,initState,middleware){
    let state = reducer();
    const listener = []

    // 获取state
    const getState = function(){
        return state
    }

    // 修改state
    const dispatch = function(action){
        state = reducer(state,action)

        // 执行监听的函数
        for(let i=0;i<listener.length;i++){

            typeof listener[i]==='function' && listener[i]()
        }
    }

    // 监听state修改
    const subscribe = function(fn){
        // 保存传入的函数
        listener.push(fn);

        return function unsbuscribe(){
            const idx = listener.indexOf(fn);
            listener.splice(idx,1)
        }
    }

    // 修改reducer
    const replaceReducer = function(newReducer){
        reducer = newReducer
    }
    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer
    }
}

// export default createStore;

import {createStore} from './simpleRedux'
// 当你不会封装函数时，先用

const store = createStore(reducer);
const unSubscribe = store.subscribe(function(){
    // 这里的代码在state被修改时执行
    console.log(1)
})
store.subscribe(function(){
    // 这里的代码在state被修改时执行
    console.log(2)
})
const state = store.getState();
store.dispatch({type})
const state2 = store.getState();


unSubscribe()