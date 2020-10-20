import {createStore} from 'redux';

// 2. 定义reducer
const initState = {
    currentUser:{
        
    },
    isLogin:false
}
const reducer = function(state=initState, action){
    // 传入state和action，且必须返回一个新的State
    // action: {type:'login',user}
    switch(action.type){
        case 'login':
            return {
                isLogin:true,
                currentUser:action.user
            }
        case 'logout':
            return initState;

        // {type:'update_user',user:{phone:13188888888,password:1234}}
        case 'update_user':
            return {
                ...state,
                currentUser:{
                    ...state.currentUser,
                    ...action.user
                }
            }
        default:
            return state;

    }

}


// 1. 创建仓库
const store = createStore(reducer)



export default store;