import React, { useState, useEffect,useMemo,useCallback,useContext } from 'react';

import MyContext from './context'
/**
 * useContext(context)
   * 返回共享的数据，简化context数据获取
 */


const arr = []

function UseContext() {
    const value = useContext(MyContext);
    console.log('value=',value)

    return (
        <div>
           <h4>useContext</h4>
            {/* <MyContext.Consumer>
                {
                    value=>{
                        console.log('value=',value);
                    }
                }
            </MyContext.Consumer> */}
        </div>
    )
}

export default UseContext;