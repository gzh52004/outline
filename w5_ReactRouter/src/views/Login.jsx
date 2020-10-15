import React from 'react';

const Login = function(){
    // userInfo
    return (
        <div>
            用户名：<input type="text" />
            密码：<input type="password" />
            <button onClick={()=>{
                localStorage.setItem('userInfo',JSON.stringify({username:'laoxie',password:123,role:'admin'}))
            }}>登录</button>
        </div>
    )
}

export default Login;