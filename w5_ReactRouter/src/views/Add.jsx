import React from 'react';

import {withAuth, withUser} from '../utils/hoc'

// ES7的装饰器写法
@withAuth
class Cart extends React.Component{
    componentDidMount(){
        console.log('Cart.componentDidMount')
    }
    render(){
        return(
            <div>
                添加面试题
            </div>
        )
    }
}
export default Cart;