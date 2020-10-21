/**
 * 购物车信息
 * 
 */
const initState = {
    goodslist:[{id:1,name:'xxx',price:998,qty:2}],
    totalPrice:0
}

const cartReducer = function(state=initState,action){
    let goodslist,totalPrice;
    switch(action.type){
        // {type:'add_to_cart',goods}
        case 'add_to_cart':
            goodslist = [action.goods,...state.goodslist];
            totalPrice = goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
            return {
                goodslist,
                totalPrice
            }
        // {type:'remove_from_cart',id}
        case 'remove_from_cart':
            goodslist = state.goodslist.filter(item=>item.id!=action.id);
            totalPrice = goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
            return {
                goodslist,
                totalPrice
            }
        default:
            return state;
    }
}

export default cartReducer;