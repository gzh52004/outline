import React, { useState } from 'react';
import {useStorage} from '../../utils/hooks'

function MyHook() {
    const [qty, changeQty] = useState(1);
    const [currentUser,changeUser] = useStorage('currentUser')
    const [cartlist,chageCart] = useStorage('cart')
    console.log('currentUser',currentUser)
    console.log('cartlist',cartlist)
    return (
        <div>
            <h4>MyHook</h4>
            <div>
                用户名：{currentUser.username}
                <ul>
                    {
                        cartlist.map(item=><li key={item.name}>{item.name}</li>)
                    }
                </ul>
            </div>
            <button onClick={()=>{
                const newUser = {...currentUser,username:'laoxie'}
                changeUser(newUser)
            }}>修改用户名</button>
        </div>
    )
}

export default MyHook;