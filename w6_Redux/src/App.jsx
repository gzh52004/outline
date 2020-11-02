import React,{Suspense, lazy} from 'react';

import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import {HomeOutlined,UserOutlined,ShoppingCartOutlined} from '@ant-design/icons'

import { Layout,Menu,Row,Col,Button } from 'antd';

// import Home from './views/Home'
// import Login from './views/Login'
// import Reg from './views/Reg'
// import Mine from './views/Mine'
// import IQ from './views/IQ'
// import Add from './views/Add'

const Home = lazy(function(){
    return import('./views/Home')
});
const Mine = lazy(() => import("./views/Mine"));
const Login = lazy(() => import("./views/Login"));
const Reg = lazy(() => import("./views/Reg"));
const IQ = lazy(() => import("./views/IQ"));
const Add = lazy(() => import("./views/Add"));

import 'antd/dist/antd.css'
import './App.scss';

import {connect} from 'react-redux'
import userAction from '@/store/actions/user'

// import store from '@/store'

// store.subscribe(()=>{
//     console.log('statechange=',store.getState())
// });


// mapStateToProp函数用来定义传递什么数据到组件的props
const mapStateToProps = function(state){
    console.log('mapStateToProps.state=',state);
    return {
        isLogin:state.user.isLogin,
        currentUser:state.user.currentUser
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        dispatch,
        logout(){
            // dispatch({type:'logout'})
            dispatch(userAction.logout())
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class App extends React.Component{
    state = {
        // isLogin:store.getState().isLogin,
        menu: [{
            text: '首页',
            path: '/home',
            name: 'home',
            component: Home,
            icon:<HomeOutlined/>
        }, 
        {
            text: '我的',
            path: '/mine',
            name: 'mine',
            component: Mine,
            icon:<UserOutlined/>
        }, 
        {
            text: '添加面试题',
            path: '/add',
            name: 'add',
            component: Add,
            // icon:<ShoppingCartOutlined/>
        }
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
    componentDidMount(){
        // store.subscribe(()=>{
        //     console.log('statechange=',store.getState())
        //     // this.setState({
        //     //     isLogin:store.getState().isLogin
        //     // })
        // });
    }
    render(){console.log('App.props',this.props);
        const {menu,current} = this.state;
        // const currentState = store.getState(); 
        const {isLogin,dispatch,logout} = this.props;
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
                        {
                            isLogin ? 
                            <Button type="link" onClick={()=>{
                                // dispatch({type:'logout'})
                                logout()
                            }}>退出</Button>
                            :
                            <>
                                <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                                <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                            </>
                        }
                    </Col>
                </Row>
                <Layout.Content style={{padding:10}}>
                <Suspense fallback={<div>loading...</div>}>
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
                </Suspense>
                </Layout.Content>
            </div>
        )
    }
}



// App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App