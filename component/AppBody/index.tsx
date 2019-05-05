import React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, View, Text } from 'native-base';
export interface Props {}

interface State {}

export class AppBody extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content padder>
        <Text>Body</Text>
      </Content>
    );
  }
}

const styles = StyleSheet.create({});
