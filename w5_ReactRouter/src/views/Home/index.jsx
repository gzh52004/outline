import React from 'react';
import { List, Rate } from 'antd'
import moment from 'moment'

import { withUser } from '@/utils/hoc';
import request from '@/utils/request';
import './style.scss';

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

class Home extends React.Component {
    state = {
        newList: [], // 最新面试题
        hotList: [],// 热门面试题
        iqList: [],// 重点难点面试题
    }
    async componentDidMount() {
        const { data: newList } = await request.get('/iq');
        const { data: hotList } = await request.get('/iq', {
            params: {
                sort: 'hot'
            }
        });
        const { data: iqList } = await request.get('/iq', {
            params: {
                sort: 'difficulty'
            }
        });
        this.setState({
            newList: newList.data.result,
            hotList: hotList.data.result,
            iqList: iqList.data.result,
        });
    }
    goto = (id) => {
        // this.props.history.push('/iq/'+id)
        this.props.history.push({
            pathname: '/iq/' + id,
            search: '?id=' + id,
            state: { price: 998 }
        })
    }
    render() {
        const { newList, hotList, iqList } = this.state;
        console.log('newList=', newList);
        return (
            <div className="home">
                <h2>最新面试题</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={newList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<div onClick={this.goto.bind(this, item._id)}>{item.question}</div>}
                                description={<span>回答：{item.answer}</span>}
                            />
                            <div>{moment(item.addtime).format('YYYY/MM/DD')}</div>
                        </List.Item>
                    )}
                />

                <h2>热门面试题</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={hotList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<div onClick={this.goto.bind(this, item._id)}>{item.question}</div>}
                                description={<div className="description"><span>回答：{item.answer}</span><span>人气：{item.hot}</span> </div>}
                            />
                            <div>{moment(item.addtime).format('YYYY/MM/DD')}</div>
                        </List.Item>
                    )}
                />

                <h2>重难点面试题</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={iqList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<div onClick={this.goto.bind(this, item._id)}>{item.question}</div>}
                                description={<div className="description"><span>回答：{item.answer}</span><span>人气：{item.hot}</span> <Rate disabled defaultValue={item.difficulty} className="mini-star" /></div>}
                            />
                            <div>{moment(item.addtime).format('YYYY/MM/DD')}</div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

Home = withUser(Home); // OuterComponent

export default Home;