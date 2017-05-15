/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import CDMain from './app/main/CDMain';

import NavigationExperimental from 'react-native-deprecated-custom-components';


export default class reading extends Component {
  render() {
    return (
        <NavigationExperimental.Navigator
            // 初始化路由
            initialRoute={{ name: CDMain, component: CDMain }}

            // 路由跳转过渡方式
            configureScene={(route) => {
              return NavigationExperimental.Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
            }}

            // 实例化成组件
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.props} navigator={navigator} />
            }}
        />
    );
  }
}

AppRegistry.registerComponent('reading', () => reading);
