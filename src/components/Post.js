import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        };
    }

    render() {

        const { foto } = this.state;

        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image 
                        source={{uri: foto.urlPerfil}}
                        style={styles.fotoDePerfil}
                        />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image 
                    source={{uri: foto.urlFoto}}
                    style={styles.foto}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoDePerfil: {
        margin: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    foto: {
        width: width,
        height: width
    }
});