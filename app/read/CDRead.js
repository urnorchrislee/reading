import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import CDReadDeatil from './CDReadDeatil';

export default class extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>this._pressMe()}>
                <Text style={styles.welcome}>
                    Read!
                </Text>
            </TouchableOpacity>
        );
    }

    _pressMe() {
        this.props.navigator.push({
            component: CDReadDeatil
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

