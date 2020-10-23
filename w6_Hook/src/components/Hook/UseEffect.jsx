import React, { useState, useEffect } from 'react';
/**
 * useEffect(fn)
    * fn函数的执行时机
 */

function UseEffect() {
    const [qty, changeQty] = useState(1);
    const [money, changeMoney] = useState(10000);
    // 用法1：标准用法
    // 替代类组件中componentDidMount与componentDidUpdate生命周期函数
    useEffect(function () {
        //  这里的代码在组件渲染结束后执行
        console.log('useEffect')
    });

    // 用法2：添加依赖（可以多个）
    // 替代类组件中shouldComponentUpdate生命周期函数
    useEffect(function () {
        //  这里的代码在依赖(money)改变时才执行
        console.log('涨薪了')
    },[money]);

    // 用法3：空依赖
    // 替代类组件中componentDidMount生命周期函数
    useEffect(function () {
        //  这里的代码只在初始化时执行
        console.log('空依赖')
    },[]);

    // 用法4：返回一个函数
    // 替代类组件中componentUnmount生命周期函数
    useEffect(function () {
        console.log('ajax')
        return function(){
            //  这里的代码在组件被销毁时执行
            console.log('cancel ajax')
        }
    },[]);

    return (
        <div>
            <h4>useEffect</h4>
            <button onClick={() => {
                changeQty(qty + 1)
            }}>qty:{qty}</button>

            <button onClick={() => {
                changeMoney(money+money*0.2)
            }}>薪资:{money}</button>
        </div>
    )
}

export default UseEffect;