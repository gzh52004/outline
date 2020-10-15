/**
 * 高阶组件
    * 高阶组件是一个函数
    * 高阶组件的参数为React组件
    * 高阶组件必须返回一个新的组件
 */
import React from 'react';
import {Redirect} from 'react-router-dom';

export function withUser(MyComponent){
    // return class OuterComponent extends React.Component{
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


//  用户访问权限高阶组件
export function withAuth(InnerComponent){
    @withUser
    class OuterComponent extends React.Component{
        componentDidMount(){
        }
        render(){
            if(this.props.userInfo){
                 // 用户登录后显示内容
                return <InnerComponent {...this.props} />
            }else{
                return <Redirect to="/login" />
            }
        }
    }

    // 反向继承：这种写法只能适用于类组件
    // class OuterComponent extends InnerComponent{
    //     componentDidMount(){
    //         console.log('OuterComponent.componentDidMount');
    //         super.componentDidMount();
    //     }
    //     render(){
    //         if(this.props.userInfo){
    //             return super.render()
    //         }else{
    //             return <Redirect to="/login" />
    //         }
    //     }
    // }
    // return withUser(OuterComponent);
    return OuterComponent
}