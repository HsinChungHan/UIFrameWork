import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppHeader } from './component/AppHeader/index';
import { AppFooter } from './component/AppFooter/index';
import { AppBody } from './component/AppBody/index';
import { Container, StyleProvider, Root } from 'native-base';
import { AppLoading } from 'expo';
import Expo from 'expo';

// import getTheme from './native-base-theme/components';
// import material from './native-base-theme/variables/material.js';

export interface Props {}

interface State {
  loading: boolean;
}
export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('./native-base-theme/Fonts/Roboto.ttf'),
      Roboto_medium: require('./native-base-theme/Fonts/Roboto_medium.ttf')
    });
    this.setState({
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      console.log('Is loading');
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      console.log('Not loading');
      return (
        <Container style={styles.container}>
          <AppHeader />
          <AppBody />
          <AppFooter />
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
