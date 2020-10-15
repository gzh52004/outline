import React from 'react';

import {withAuth, withUser} from '../utils/hoc'

let Mine = function(props){
    console.log('Mine.props',props)
    // let userInfo = localStorage.getItem('userInfo');
    // try{
    //     userInfo = JSON.parse(userInfo)
    // }catch(err){
    //     userInfo = {}
    // }
    return (
        <div>
            Mine
            <button onClick={()=>{
                props.history.push('/home')
            }}>回到首页</button>
        </div>
    )
}

// Mine = withUser(Mine);
Mine = withAuth(Mine)
export default Mine;