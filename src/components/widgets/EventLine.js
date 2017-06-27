import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

export default class Events extends Component {
    render() {
        let {content} = this.props;
        return (
            <TouchableHighlight activeOpacity={1} onPress={() => this.props.onClick(content)}>
                <View style={!this.props.selected ? eventsStyles.box : eventsStyles.boxSelected}>
                    <View>
                        <Image source={{uri: content.perfil}} style={eventsStyles.boxImage}/>
                    </View>
                    <View style={eventsStyles.boxHeaderText}>
                        <Text style={eventsStyles.boxTitle}>{content.title}
                            <Text style={eventsStyles.boxDescription}>{content.description}</Text>
                        </Text>
                        <Text style={eventsStyles.boxDistance}>{content.stringDist}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const eventsStyles = StyleSheet.create({
    box: {
        height: 70,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: '#CCC'
    },
    boxSelected: {
        height: 70,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: '#CCC'
    },
    boxImage: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    boxHeaderText: {
        marginLeft: 13,
        marginTop: 1
    },
    boxTitle: {
        fontSize: 17,
        color: '#808080',
        fontWeight: 'bold'
    },
    boxDescription: {
        color: '#CCC',
        fontSize: 13,
        margin: 10
    },
    boxDistance: {
        fontSize: 14,
        marginTop: 5
    }
})