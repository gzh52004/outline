import React from 'react';
import CryptoJS from 'crypto-js';console.log('CryptoJS',CryptoJS)
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
        {
            async validator(rule, value) {
                if (!value) {
                    return
                }
                // 根据输入的用户名校验用户名是否被占用
                const { data } = await request.get('/user/check', {
                    params: {
                        username: value
                    }
                });

                if (data.status === 200) {
                    return Promise.resolve();
                }
                return Promise.reject('用户名已存在');
            },
        }
    ],
    password: [
        { required: true, message: '密码不能为空' },
        { min: 6, max: 12, message: '密码长度必须为6-12位字符' }
    ]
}
const Reg = function (props) {
    const onFinish = async (values) => {
        // 注册
        values.password = CryptoJS.SHA256(values.password).toString();
        console.log('加密后=',values);
        const { data } = await request.post('/user/reg', values);
        if (data.status === 200) {
            message.success('注册成功')
        }

        props.history.push({
            pathname: '/login',
            state: { username: values.username }
        })
    }
    return (
        <div>
            <h1>免费注册</h1>
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

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Reg;