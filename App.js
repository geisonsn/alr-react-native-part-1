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
      <FlatList style={styles.container}
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) =>
          <View>
            <View style={styles.cabecalho}>
              <Image 
                source={require('./resources/img/alura.jpg')}
                style={styles.fotoDePerfil}/>
              <Text>{item.usuario}</Text>
            </View>
            <Image 
              source={require('./resources/img/alura.jpg')} 
              style={styles.foto} />
          </View>
        }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width
  }
});