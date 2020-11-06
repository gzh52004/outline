import React, { Component } from 'react'
import { View, Button, Text,RichText } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { observer, inject } from 'mobx-react'
import Taro from '@tarojs/taro'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  state = {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello World!'
      }]
    }],
    htmlstring:'<div style="color:#58bc58;font-size:30px">htmlstring</div>'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  render () {console.log('index.props',this.props);
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>

        <RichText nodes={this.state.htmlstring}/>
      </View>
    )
  }
}

export default Index
