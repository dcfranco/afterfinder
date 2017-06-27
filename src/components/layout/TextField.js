import React from 'react';
import { Icon } from 'react-native-elements';
import { View, TextInput, StyleSheet } from 'react-native';

export default TextField = ({icon, onChange, value, children, firstUpCase}) => (
    <View style={textFieldStyle.container}>
        <View style={textFieldStyle.icon}><Icon name={icon} color='#888888'/></View>
        <View style={textFieldStyle.text}><TextInput autoCapitalize={firstUpCase ? 'sentences' : 'none'} style={{color: '#383838'}} underlayColor='transparent' underlineColorAndroid='transparent' onChangeText={(text) => onChange(text)} value={value} placeholder={children} /></View>
    </View>
);

const textFieldStyle = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    icon: {
        marginTop: 13,
        marginLeft: 10
    }
});