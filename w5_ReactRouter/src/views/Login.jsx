import React from 'react';
import SHA256 from 'crypto-js/sha256';console.dir(SHA256)
import { Form, Input, Button, Checkbox, message } from 'antd';
import request from '@/utils/request';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const rules = {
    username: [
        { required: true, message: '用户名不能为空' },
    ],
    password: [
        { required: true, message: '密码不能为空' },
    ]
}
const Login = function (props) {
    console.log('Login.props', props);
    const onFinish = async (values) => {console.log('加密前=',values)
        // 把密码通过Crypto进行加密（加密算法：sha256）
        let {username,password,remember} = values;
        password = SHA256(values.password).toString()
       console.log('加密后=',password)
        const { data } = await request.get('/user/login', {
            params:{
                username,
                password,
                remember
            }
        });
        if (data.status === 200) {
            message.success('登录成功')
            props.history.push({
                pathname: '/mine'
            })
        }else{
            message.error('用户名或密码错误') 
        }

        if(values.remember){
            localStorage.setItem('currentUser',JSON.stringify(data.data))
        }else{
            sessionStorage.setItem('currentUser',JSON.stringify(data.data))
        }
    }
    return (
        <div>
            <h1>用户登录</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>下次免登陆</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;