import React,{useState} from 'react'

import UseState from  './UseState'
import UseEffect from  './UseEffect'

function Hook(){
    const [show,change] = useState(true)
    return (
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
        </div>
    )
}

export default Hook;