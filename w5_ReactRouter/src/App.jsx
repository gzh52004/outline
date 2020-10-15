import React from 'react';

import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom';

import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Mine from './views/Mine'

import './App.scss';

let App = (props)=>{
    console.log('App.props',props);
    const menu = [{
        text:'首页',
        path:'/home',
        name:'home',
        component:Home
    },{
        text:'登录',
        path:'/login',
        name:'login',
        component:Login
    },{
        text:'注册',
        path:'/reg',
        name:'reg',
        component:Reg
    },{
        text:'我的',
        path:'/mine',
        name:'mine',
        component:Mine
    }];

    return (
        <div>
            <nav>
                <ul>
                    {
                        menu.map(item=><li key={item.name} onClick={()=>{
                            props.history.push(item.path)
                        }}>
                            {/* <NavLink 
                            activeClassName="active" 
                            to={item.path}
                            >{item.text}</NavLink> */}
                            {item.text}
                            </li>)
                    }
                </ul>
            </nav>
                <Switch>
                    {/* <Route path='/home' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/reg' component={Reg} />
                    <Route path='/mine' component={Mine} /> */}
                    {
                        menu.map(item=><Route key={item.name} path={item.path} component={item.component} />)
                    }
                    <Route path="/notfound" render={()=><div>404</div>} />
                    <Redirect from='/' to='/home' exact />
                    <Redirect to="/notfound" />
                </Switch>
        </div>
        )
}
 
App = withRouter(App)

export default App