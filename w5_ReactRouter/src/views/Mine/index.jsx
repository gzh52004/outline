import React from 'react';

import {Route,Redirect,Switch} from 'react-router-dom';
import {Row,Col} from 'antd';
import Info from './Info'
import ChangePassword from './ChangePassword'
import {withAuth, withUser} from '../../utils/hoc'
let Mine = function(props){
    console.log('Mine.props',props)
    const goto = (path)=>{
        props.history.push(path);
    }
    const {path:parentPath,url:parentUrl} = props.match;

    // 路由监听
    props.history.listen((location,type)=>{
        console.log('listen',location,type)
    });

    return (
        <div>
            <Row>
                <Col lg={4} md={6} sm={8} xs={12} onClick={goto.bind(this,parentUrl+'/info')}>
                    用户信息
                </Col>
                <Col lg={4} md={6} sm={8} xs={12} onClick={goto.bind(this,parentUrl+'/changepassword')}>修改密码</Col>
                <Col lg={4} md={6} sm={8} xs={12}>我的收藏</Col>
                <Col lg={4} md={6} sm={8} xs={12}>我的面试题</Col>
                <Col lg={4} md={6} sm={8} xs={12}>我的回答</Col>
            </Row>
            <Switch>
                <Route path={parentPath+"/info"} component={Info} />
                <Route path={parentPath+"/changepassword"} component={ChangePassword} />
                <Redirect from={parentPath} to={parentPath+"/info"} />
            </Switch>
        </div>
    )
}

// Mine = withUser(Mine);
Mine = withAuth(Mine)
export default Mine;