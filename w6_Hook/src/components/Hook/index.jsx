import React,{useState} from 'react'

import UseState from  './UseState'
import UseEffect from  './UseEffect'
import UseMemo from  './UseMemo'
import UseCallback from  './UseCallback'
import UseContext from  './UseContext'
import UseReducer from  './UseReducer'
import MyHook from  './MyHook'

import MyContext from './context'

const datalist = [
    { name: "goods1", price: 98, qty: 2 },
    { name: "goods2", price: 198, qty: 2 },
    { name: "goods3", price: 998, qty: 1 },
  ];

function Hook(){
    const [show,change] = useState(true)
    return (
        // <MyContext.Provider value={{datalist}}>
            <div>
                <h1>Hook的使用</h1>
                <UseState/>
                {
                    show ? 
                    <UseEffect/>
                    :
                    null
                }
                <button onClick={()=>{
                    change(!show);
                }}>切换useEffect组件</button>

                <UseMemo/>
                <UseCallback/>
                <UseContext/>
                <UseReducer/>
                <MyHook/>
            </div>

        // </MyContext.Provider>
    )
}

export default Hook;