import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default Checkbox = ({onClick, checked, children}) => (
    <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => onClick()}>
        <View style={checkboxStyles.container}>
            <View style={checkboxStyles.icon}><Icon name={ checked ? 'check-box' : 'check-box-outline-blank'} color={ checked ? '#0F9BB9' : '#888888' }/></View>
            <View style={checkboxStyles.text}><Text style={{color: checked ? '#383838' : '#888888'}}>{children}</Text></View>        
        </View>
    </TouchableHighlight>
);

const checkboxStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    text: {
        flex: 1,
        margin: 3,
        marginLeft: 9
    },
    icon: {
    }
});