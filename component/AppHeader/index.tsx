import React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';



export interface Props {}

interface State {}

export class AppHeader extends Component<Props, State> {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({});
