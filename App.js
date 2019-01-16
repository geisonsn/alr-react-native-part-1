/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import Post from './src/components/Post';

const fotos = [
  {id: 1, usuario: 'Raphael'},
  {id: 2, usuario: 'Alberto'},
  {id: 3, usuario: 'Vítor'},
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <FlatList style={styles.container}
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) =>
          <Post foto={item}/>
        }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});