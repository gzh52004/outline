import React, { useState } from 'react';
console.log('useState=', useState)
/**
 * useState(initState)
 * 返回值：返回一个Array，Array[0]：state的值，Array[1]:修改state的方法
 * 修改state: 执行修改方法，并传入新的值覆盖旧的值
 */

function UseState() {
    // var qty = 1;
    // const changeQty = function(){
    //     qty++;
    //     console.log(qty);
    // }
    const [qty, changeQty] = useState(1);
    const [user, changeUser] = useState({ username: 'laoxie', password: 123456 });
    return (
        <div>
            <h4>useState</h4>
            <button onClick={changeQty.bind(null, qty + 1)}>qty:{qty}</button>
            <div>username:{user.username}</div>
            <input type="text" value={user.username} onChange={(e) => {
                const newUser = { ...user, username: e.currentTarget.value }
                changeUser(newUser)
            }} />
        </div>
    )
}

export default UseState;