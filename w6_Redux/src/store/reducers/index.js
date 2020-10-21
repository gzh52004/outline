import {combineReducers} from 'redux';

import cartReducer from './cart'
import userReducer from './user'

const reducer = combineReducers({
    cart:cartReducer,
    user:userReducer
})

export default reducer;