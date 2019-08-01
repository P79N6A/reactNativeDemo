/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid
} from 'react-native'
import { Provider } from '@ant-design/react-native'
import ToastExample from './components/ToastExample'
import TabBarItem from '@ant-design/react-native/lib/tab-bar/TabBarItem';
import SaleAnalysis from './pages/saleAnalysis'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'analysis'
    }
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName
    })
  }
  render() {
    return (
      <Provider>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="#f5f5f5"
        >
          <TabBar.Item
            icon={<Icon name="bar-chart" />}
            title="销售分析"
            selected={this.state.selectedTab === 'analysis'}
            onPress={() => this.onChangeTab('analysis')}
          >
            <SaleAnalysis></SaleAnalysis>
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon name="transaction" />}
            title="销售管理"
            selected={this.state.selectedTab === 'manager'}
            onPress={() => this.onChangeTab('manager')}
          ></TabBar.Item>
        </TabBar>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
