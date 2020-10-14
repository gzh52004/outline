import React from 'react';

import TodoItem from './TodoItem'

function TodoContent(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.datalist.map((item, idx) => {
                        return <TodoItem 
                        key={item.id} 
                        item={item} 
                        idx={idx} 
                         />
                    })
                }
            </tbody>
        </table>
    )
}


export default TodoContent;