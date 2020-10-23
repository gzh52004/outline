/**
 * export 后只能跟 var let const function class default {}
 * 自定义Hook
    * 在自定义hook中一般会使用内置的hook来达到想要的效果
 */
import {useState} from 'react';

export function useStorage(key){
    let value = localStorage.getItem(key)
    try{
        value = JSON.parse(value)
    }catch(err){
        value = value
    }

    const [state,changeState] = useState(value);

    const change = function(newValue){
        changeState(newValue);

        if(typeof newValue === 'object'){
            newValue = JSON.stringify(newValue)
        }
        localStorage.setItem(key,newValue);


    }

    return [state,change]
}