import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer } from 'react';
import {MyContext} from './store' 
/**
 * useReducer()
   * 替代redux的功能
 */

// const initState = {
//     goodslist: [
//         { id: 1, name: "goods1", price: 98, qty: 2 },
//         { id: 2, name: "goods2", price: 198, qty: 2 },
//         { id: 3, name: "goods3", price: 998, qty: 1 },
//     ]
// }

// const reducer = function (state, action) {
//     switch (action.type) {
//         // {type:'add_to_cart',goods}
//         case 'add_to_cart':
//             return {
//                 ...state,
//                 goodslist: [action.goods, ...state.goodslist]
//             }

//         // {type:'remove_from_cart',id}
//         case 'remove_from_cart':
//             return {
//                 ...state,
//                 goodslist: state.goodslist.filter(item => item.id != action.id)
//             }
//         // {type:'clear_cart'}
//         case 'clear_cart':
//             return {
//                 ...state,
//                 goodslist: []
//             }
//         // {type:'change_qty',id,qty}
//         case 'change_qty':
//             const goodslist = state.goodslist.map(item => {
//                 if (item.id === action.id) {
//                     item.qty = action.qty
//                 }
//                 return item;
//             })
//             return {
//                 ...state,
//                 goodslist
//             }
//         default:
//             throw new Error('error');
//     }
// }


function UseReducer() {
    // const [state, dispatch] = useReducer(reducer, initState);
    const {state,dispatch} = useContext(MyContext)

    const totalPrice = useMemo(()=>{
        return state.goodslist.reduce((prev,item)=>prev+item.price*item.qty,0);
    },[state])

    const remove = useCallback((id)=>{
        dispatch({type:'remove_from_cart',id})
    },[]);

    const clearCart = useCallback(()=>{
        dispatch({type:'clear_cart'})
    },[])

    return (
        <div>
            <h4>useReducer</h4>
            <ul>
                {
                    state.goodslist.map(item => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            <p className="price">{item.price} &times; {item.qty}</p>
                            <button onClick={remove.bind(null,item.id)}>删除</button>
                        </li>
                    ))
                }
            </ul>
            <div><button onClick={clearCart}>清空</button>总价：{totalPrice.toFixed(2)}</div>
        </div>
    )
}

export default UseReducer;