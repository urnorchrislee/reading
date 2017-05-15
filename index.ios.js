/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CDMain from './app/main/CDMain';

export default class reading extends Component {
  render() {
    return (
      <CDMain />
    );
  }
}

AppRegistry.registerComponent('reading', () => reading);
