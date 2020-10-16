import React from 'react';
import request from '@/utils/request';
import {Avatar, Rate,Divider} from 'antd';
import {UserOutlined} from '@ant-design/icons'

import './style.scss';

// const IQ = (props)=>{
//     // 注意：函数组件不能使用async关键字
//     console.log('IQ.props',props)
//     const {id} = props.match.params;
    
    
    
// }
class IQ extends React.Component{
    state = {
        data:{}
    }
    async componentDidMount(){
        const {id} = this.props.match.params;
        const {data} = await request.get('/iq/'+id)
        console.log('IQ.data',data);
        this.setState({
            data:data.data
        })
    }
    render(){
        const {data} = this.state
        return (
            <div className="iq">
                <h1>{data.question}</h1>
                <div className="info">
                {
                    data.user ? 
                    <div><Avatar size="small" icon={<UserOutlined />} src={data.user.avatar} />{data.user.username}</div>
                    :
                    null
                }
                <div>{data.hot}人浏览</div>
                <div className="mini-star">难度：<Rate disabled value={data.difficulty} /></div>
                {data.companyid ? <div onClick={()=>{
                    // 点击查看当前公司下所有面试题
                }}>@{data.company.name}</div> : null}
                </div>

                <Divider orientation="left" plain>
                    回复（{data.answer ? data.answer.length : 0}）
                </Divider>
            </div>
        )
    }
}

export default IQ