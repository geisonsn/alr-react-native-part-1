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

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
        fotos: []
    }
  }
  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) =>
          <Post foto={item}/>
        }
        />
    );
  }
  componentDidMount() {
    fetch('http://10.0.2.2:8080/api/public/fotos/rafael')
        .then(resposta => resposta.json())
        .then(json => {
          this.setState({fotos: json});          
        })
        .catch(e => {
          console.warn('Não foi possível carregar as fotos');
          this.setState({status: 'ERRO'});
        });
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});