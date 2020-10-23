import React, { useState, useEffect,useMemo } from 'react';
/**
 * useMemo(fn)
    * 一般用于性能优化
    * 只要依赖发生改变时才重新执行fn中的代码并返回新的值，否则直接返回缓存数据
 */

const datalist = [
    { name: "goods1", price: 98, qty: 2 },
    { name: "goods2", price: 198, qty: 2 },
    { name: "goods3", price: 998, qty: 1 },
  ];

function UseMemo() {
    const [qty,changeQty] = useState(1)
    const [goodslist,change] = useState(datalist)
    
    const totalPrice = useMemo(function(){
        // 假设这里的代码比较占用资源
        console.log('useMemo')
        const total = goodslist.reduce((prev,item)=>prev+item.qty*item.price,0)
        return total
    },[goodslist])

    return (
        <div>
           <h4>useMemo</h4>
        <div>商品总价：{totalPrice}</div>
        <button onClick={()=>{
            let newGoodslist = [{name:'goods4',price:1998,qty:3},...goodslist];
            change(newGoodslist);
        }}>添加商品</button>
        <button onClick={()=>{
            let index = parseInt(Math.random()*goodslist.length)
            let newGoodslist = goodslist.filter((item,idx)=>idx!==index);
            change(newGoodslist);
        }}>删除商品</button>
        <button onClick={()=>{
            changeQty(qty+1)
        }}>qty：{qty}</button>
        </div>
    )
}

export default UseMemo;