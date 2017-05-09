/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Todo } from './src/app/Todo';

export default class simpleTodo extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

AppRegistry.registerComponent('simpleTodo', () => simpleTodo);
