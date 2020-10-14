import React from 'react';
import MyContext from './context';

class TodoForm extends React.Component{
    // 静态属性
    static contextType = MyContext; // 等效于TodoForm.contextType = MyContext

    // constructor(props){
    //     super();
    //     this.state = {
    //         text:'laoxie'
    //     }

    //     // this.changeText = this.changeText.bind(this)
    //     // this.submit = this.submit.bind(this)
    // }
    state = {
        text:''
    }

    changeText = event=>{
        this.setState({
            text:event.currentTarget.value
        })
    }
    submit = ()=>{
        // 清空文本框
        this.setState({
            text:''
        })
        // this.props.addItem(this.state.text);
        this.context.add(this.state.text)

        // 自动获得焦点（节点操作）
        // this.refs.text.focus() // 这种方式已经不推荐
        this.text.focus();
    }
    render(){
        console.log('todoForm.this=',this);
        return (
            <div>
                <textarea ref={el=>this.text=el} value={this.state.text} onChange={this.changeText}></textarea>
                <button onClick={this.submit}>添加</button>
            </div>
        )
    }
}

// 添加contextType静态属性
// TodoForm.contextType = MyContext

export default TodoForm;