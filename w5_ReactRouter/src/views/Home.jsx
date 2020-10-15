import React from 'react';

import {withUser} from '../utils/hoc';

let Home = function(props){
    console.log('Home.props',props)
    // let userInfo = localStorage.getItem('userInfo');
    // try{
    //     userInfo = JSON.parse(userInfo)
    // }catch(err){
    //     userInfo = {}
    // }
    return (
        <div>
            Home
        </div>
    )
}

Home = withUser(Home); // OuterComponent

export default Home;