/**
 * 高阶组件
    * 高阶组件是一个函数
    * 高阶组件的参数为React组件
    * 高阶组件必须返回一个新的组件
 */
import React from 'react';

const { render } = require("react-dom")

export function withUser(MyComponent){
    // return class OuterComponent extends Component{
        // constructor(props){
        //     super(props);
        //     this.state = {
        //         userInfo:{}
        //     }
        // }
        // componentDidMount(){
        //     let userInfo = localStorage.getItem('userInfo');
        //     try{
        //         userInfo = JSON.parse(userInfo)
        //     }catch(err){
        //         userInfo = {}
        //     }

        //     this.setState({
        //         userInfo
        //     })
        // }
        // render(){
        //     return <MyComponent {...this.props} userInfo={this.state.userInfo}>
        // }
    // }
    return function OuterComponent(props){console.log('OuterComponent.props',props)
        // 获取本地存储信息
        let userInfo = localStorage.getItem('userInfo');
        try{
            userInfo = JSON.parse(userInfo)
        }catch(err){
            userInfo = {}
        }
        return <MyComponent {...props} userInfo={userInfo} />
    }
 }