import React, { Component } from 'react';

// import './App.css';
import TodoList from './components/TodoList'
import Lifecycle from './components/Lifecycle'

class App extends Component{
    state = {
        username:'laoxie',
        password:123
    }
    render(){
        return (
            <div>
                Hello, App!
    
                {/* <TodoList/> */}

                <Lifecycle username={this.state.username}/>
                <button onClick={()=>{
                    this.setState({
                        username:'xiao xie'
                    });
                }}>修改名字</button>
                <button onClick={()=>{
                    this.setState({
                        password:123456
                    });
                }}>修改密码:{this.state.password}</button>
            </div>
        )
    }
}

export default App;