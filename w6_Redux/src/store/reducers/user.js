// 数据持久化：刷新时先读取webStorage中的数据
let currentUser = localStorage.getItem('currentUser');
let isLogin = false;
try{
    currentUser = JSON.parse(currentUser) || {};
}catch(err){
    currentUser = {}
}

if(currentUser.Authorization){
    isLogin = true
}


// 2. 定义reducer
const initState = {
    currentUser,
    isLogin
}
const userReducer = function(state=initState, action){
    // 传入state和action，且必须返回一个新的State
    // action: {type:'login',user}
    switch(action.type){
        case 'login':
            // 数据持久化：把数据存入webStorage
            localStorage.setItem('currentUser',JSON.stringify(action.user))

            return {
                isLogin:true,
                currentUser:action.user
            }
        case 'logout':
            localStorage.removeItem('currentUser')
            return {
                currentUser:{},
                isLogin:false
            };

        // {type:'update_user',user:{phone:13188888888,password:1234}}
        case 'update_user':
            const newState = {
                ...state,
                currentUser:{
                    ...state.currentUser,
                    ...action.user
                }
            }
            localStorage.setItem('currentUser',JSON.stringify(newState.currentUser))
            return newState
        default:
            return state;

    }

}

export default userReducer;