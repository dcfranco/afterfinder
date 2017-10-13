import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { GraphRequestManager, GraphRequest, LoginManager } from 'react-native-fbsdk'

export default class FacebookTest extends Component {
    componentWillMount(){
        const infoRequest = new GraphRequest(
            '/me/events',
            null,
            this._responseInfoCallback,
        );
      
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    _responseInfoCallback(error, result) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }
    }

    fbLogin(){
        LoginManager.logInWithReadPermissions(['user_friends', 'user_events', 'email']).then(
            (res) => console.log(res),
            (err) => console.log(err)
        );
    }
    render() {
        return (
            <View>
                <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => this.fbLogin()}>
                    <Text>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}