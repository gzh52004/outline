import React from 'react';

import MyContext from './context';

function TodoItem({ item, idx}) {
    return (
        <MyContext.Consumer>
            {
                ({remove,complete})=>{
                    return (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{item.text}</td>
                            <td>{item.done ? '是' : '否'}</td>
                            <td>
                                <button onClick={complete.bind(null,item.id)}>完成</button>
                                <button onClick={remove.bind(null,item.id)}>删除</button>
                            </td>

                        </tr>
                    )
                }
            }
        </MyContext.Consumer>
        
    )
}


export default TodoItem;