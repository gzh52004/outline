import request from '@/utils/request';
import SHA256 from 'crypto-js/sha256';
import { call,apply, put, takeEvery, takeLatest } from 'redux-saga/effects';

/**
 * saga会在适当的时候自动调用迭代器的next()方法
 * call&apply等效于原生js中的call&apply，主要是为了方便测试（单元测试，点对点测试）
 */

function * initial(){
    console.log('hello saga!');
    // 监听异步action：saga action
    // yield takeEvery('login_async',login);   // 可同时执行多个action
    yield takeLatest('login_async',login); // takeLatest做了防抖优化，只生效最后一次
    yield takeLatest('change_qty_async',changeQty); // takeLatest做了防抖优化，只生效最后一次
}

function * login(sagaAction){console.log('saga.login',sagaAction)
    // const {data} =  yield request.get('/user/login',{
    //     params:{
    //         username:'h52004',
    //         password:SHA256('123456').toString()

    //     }
    // })

    const {data} = yield call(request.get,'/user/login',{    
        params:sagaAction.data
    })

    console.log('data=',data);

    // 等待异步结果返回后，调用同步action：reducer action
    const action = {type:'login',user:data.data}
    // put 就是 dispatch
    yield put(action)

}

// {type:'change_qty_async',data:{id,qty}}
function * changeQty(sagaAction){
    let {id,qty} = sagaAction.data
    const {data} = yield call(request.get,`/goods/${id}/kucun`);
    if(data.kucun <= qty){
        qty = data.kucun;
        alert('库存不足')
    }

    yield put({type:'change_qty',id,qty});
}

export default initial;