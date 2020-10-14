import React, { Component ,createContext} from 'react';

import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

import MyContext from './context';


class TodoList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         datalist: [
    //             {
    //                 id: 1,
    //                 text: '实现小目标，赚他一个亿',
    //                 done: false,
    //                 date: new Date()
    //             },
    //             {
    //                 id: 2,
    //                 text: '迎娶白富美，走上人生巅峰',
    //                 done: false,
    //                 date: new Date(),
    //             },
    //             {
    //                 id: 3,
    //                 text: '出任CEO，达到疯癫状态',
    //                 done: false,
    //                 date: new Date(),
    //             }
    //         ]
    //     }

    //     // 给自定义函数绑定this
    //     // this.addItem = this.addItem.bind(this);
    //     // this.removeItem = this.removeItem.bind(this);
    //     // this.completeItem = this.completeItem.bind(this);
    // }

    state = {
        datalist: [
            {
                id: 1,
                text: '实现小目标，赚他一个亿',
                done: false,
                date: new Date()
            },
            {
                id: 2,
                text: '迎娶白富美，走上人生巅峰',
                done: false,
                date: new Date(),
            },
            {
                id: 3,
                text: '出任CEO，达到疯癫状态',
                done: false,
                date: new Date(),
            }
        ]
    }

    addItem = (text) => {
        console.log(text)
        const { datalist } = this.state;
        const newData = [{
            id: parseInt(Math.random() * 100000),
            text,
            done: false,
            date: new Date(),
        }, ...datalist]

        this.setState({
            datalist: newData
        })
    }
    removeItem = (id) =>{
        console.log('id=', id)
        const { datalist } = this.state;

        const newData = datalist.filter(item => item.id !== id)

        this.setState({
            datalist: newData
        })
    }
    completeItem = (id) => {
        const { datalist } = this.state;

        const newData = datalist.map(item => {
            if (item.id === id) {
                item.done = true;
            }

            return item; //[100,100,100]
        });

        this.setState({
            datalist: newData
        })
    }

    render() {console.log('TodoList.render=',this)
        const { datalist } = this.state;// this.state.datalist
        const doneList = datalist.filter(item => item.done);
        const unDoneList = datalist.filter(item => !item.done);
        const shareData = {
            remove: this.removeItem,
            complete: this.completeItem,
            add: this.addItem
        }
        return (
            <div>
                {/*深层次组件通讯步骤2：父组件给子组件共享数据*/}
                <MyContext.Provider value={shareData}>
                    <TodoContent datalist={datalist} />
                    <div>总数：{datalist.length}, 完成：{doneList.length},未完成：{unDoneList.length}</div>
                    <TodoForm />
                </MyContext.Provider>
            </div>
        )
    }
}

export default TodoList;