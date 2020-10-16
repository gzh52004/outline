import React from 'react';

import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import {HomeOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'

import { Layout,Menu,Row,Col,Button } from 'antd';

import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Mine from './views/Mine'
import IQ from './views/IQ'

import 'antd/dist/antd.css'
import './App.scss';


// let App = (props) => {
//     console.log('App.props', props);
//     const menu = [{
//         text: '首页',
//         path: '/home',
//         name: 'home',
//         component: Home
//     }, {
//         text: '登录',
//         path: '/login',
//         name: 'login',
//         component: Login
//     }, {
//         text: '注册',
//         path: '/reg',
//         name: 'reg',
//         component: Reg
//     }, {
//         text: '我的',
//         path: '/mine',
//         name: 'mine',
//         component: Mine
//     }, {
//         text: '购物车',
//         path: '/cart',
//         name: 'cart',
//         component: Cart
//     }];

//     let current = '/home'

//     const changeMenu = ({key})=>{
//         props.history.push(key);
//         current = key
//     }

    

//     return (
//         <div>

//             <Menu mode="horizontal" theme="dark" onClick={changeMenu} selectedKeys={[current]}>
//                 {
//                     menu.map(item => <Menu.Item key={item.path}>{item.text}</Menu.Item>)
//                 }
//             </Menu>
//             <Switch>
//                 {/* <Route path='/home' component={Home} />
//                     <Route path='/login' component={Login} />
//                     <Route path='/reg' component={Reg} />
//                     <Route path='/mine' component={Mine} /> */}
//                 {
//                     menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)
//                 }
//                 <Route path="/notfound" render={() => <div>404</div>} />
//                 <Redirect from='/' to='/home' exact />
//                 <Redirect to="/notfound" />
//             </Switch>
//         </div>
//     )
// }
// App = withRouter(App)

@withRouter
class App extends React.Component{
    state = {
        menu: [{
            text: '首页',
            path: '/home',
            name: 'home',
            component: Home,
            icon:<HomeOutlined/>
        }, 
        // {
        //     text: '登录',
        //     path: '/login',
        //     name: 'login',
        //     component: Login
        // }, {
        //     text: '注册',
        //     path: '/reg',
        //     name: 'reg',
        //     component: Reg
        // }, 
        {
            text: '我的',
            path: '/mine',
            name: 'mine',
            component: Mine,
            icon:<UserOutlined/>
        }, 
        // {
        //     text: '购物车',
        //     path: '/cart',
        //     name: 'cart',
        //     component: Cart,
        //     icon:<ShoppingCartOutlined/>
        // }
        ],
    
        current: '/home'
    }
    changeMenu = ({key})=>{
        this.props.history.push(key);
        this.setState({
            current:key
        })
    }
    goto = (path)=>{
        this.props.history.push(path);
    }   
    UNSAFE_componentWillMount(){
        // history,location,match
        const {pathname} = this.props.location;
        this.setState({
            current:pathname
        })
    }
    render(){console.log('App.props',this.props);
        const {menu,current} = this.state;
        return (
            <div>
                <Row style={{backgroundColor:'#001529',lineHeight:'46px'}}>
                    <Col span={18}>
                    <Menu mode="horizontal" theme="dark" onClick={this.changeMenu} selectedKeys={[current]}>
                        {
                            menu.map(item => <Menu.Item 
                                key={item.path}
                                icon={item.icon}
                                title={item.text}
                            >{item.text}</Menu.Item>)
                        }
                    </Menu>
                    </Col>
                    <Col span={6} style={{textAlign:'right'}}>
                        <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                        <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                    </Col>
                </Row>
                <Layout.Content style={{padding:10}}>
                <Switch>
                    {/* <Route path='/home' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/reg' component={Reg} />
                        <Route path='/mine' component={Mine} /> */}
                    {
                        menu.map(item => <Route key={item.name} path={item.path} component={item.component} />)
                    }
                    <Route path='/iq/:id' component={IQ} />
                    <Route path='/login' component={Login} />
                    <Route path='/reg' component={Reg} />
                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from='/' to='/home' exact />
                    <Redirect to="/notfound" />
                </Switch>
                </Layout.Content>
            </div>
        )
    }
}



export default App