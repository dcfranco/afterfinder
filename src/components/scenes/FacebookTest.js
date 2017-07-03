import React, { Component } from 'react';
import { View } from 'react-native';
import { GraphRequestManager, GraphRequest } from 'react-native-fbsdk'

export default class FacebookTest extends Component {
    componentWillMount(){
        const infoRequest = new GraphRequest(
            '/me/friends',
            null,
            this._responseInfoCallback,
        );
      
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    _responseInfoCallback(error, result) {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        } else {
            console.log(result);
        }
    }

    render() {
        return (
            <View>
                
            </View>
        );
    }
}