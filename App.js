/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Text, 
  View, 
  Image, 
  Dimensions, 
  FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

const fotos = [
  {id: 1, usuario: 'Raphael'},
  {id: 2, usuario: 'Alberto'},
  {id: 3, usuario: 'Vítor'},
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <FlatList 
        style={{marginTop: 20}}
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image 
              source={require('./resources/img/alura.jpg')} 
              style={{width:width, height:width}} />
          </View>
        }
        />
    );
  }
}