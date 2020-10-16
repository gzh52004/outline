import React from 'react';

import {withUser} from '../utils/hoc';
import {List} from 'antd'
import request from '../utils/request';

// let Home = async function(props){
//     console.log('Home.props',props)
//     // let userInfo = localStorage.getItem('userInfo');
//     // try{
//     //     userInfo = JSON.parse(userInfo)
//     // }catch(err){
//     //     userInfo = {}
//     // }
//     const {data} = await request.get('/iq')
//     return (
//         <div>
//             Home
//         </div>
//     )
// }

class Home extends React.Component{
    state = {
        iqlist:[]
    }
    async componentDidMount(){
        const {data} = await request.get('/iq',{
            params:{
                size:10
            }
        });
        console.log('data',data)
        this.setState({
            iqlist:data.data.result
        });
    }
    render(){
        const {iqlist} = this.state;
        console.log('iqlist=',iqlist);
        return (
            <div className="home">
                 <List
                    itemLayout="horizontal"
                    dataSource={iqlist}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        title={item.question}
                        description={<span>回答：{item.answer}</span>}
                        />
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}

Home = withUser(Home); // OuterComponent

export default Home;