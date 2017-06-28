import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

const mapStyle = require('../../map/style.json');

export default class Event extends Component {
    constructor(props){
        super(props)

        const { width } = Dimensions.get('window');
        const ratio = (width-15) / 105;        
        this.latitudeDelta = 0.0020;
        this.longitudeDelta = this.latitudeDelta * ratio;
    }

    render() {
        let {content, navigation} = this.props;       
        return (
            <View style={this.props.first == 1 ? eventStyles.boxFirst : eventStyles.box}>
                <View style={eventStyles.boxHeader}>
                    <View>
                        <Image source={{uri: content.perfil}} style={eventStyles.boxImage} />
                    </View>
                    <View style={eventStyles.boxHeaderText}>
                        <Text style={eventStyles.boxTitle}>{content.title}</Text>
                        <Text style={eventStyles.boxSubtitle}>{content.type}</Text>
                        <Text style={eventStyles.boxBy}>{`Por: ${content.by}`}</Text>
                    </View>
                </View>
                <View style={eventStyles.boxMap}>
                    <Text style={eventStyles.boxMapText}>{content.stringDist}</Text>
                    <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => navigation.navigate('Map', { event: content })}>
                        <View><MapView
                            style={eventStyles.boxMap}
                            customMapStyle={mapStyle}
                            scrollEnabled={false}
                            rotateEnabled={false}
                            pitchEnabled={false}
                            zoomEnabled={false}
                            initialRegion={{
                                latitude: content.lat,
                                longitude: content.long,
                                latitudeDelta: this.latitudeDelta,
                                longitudeDelta: this.longitudeDelta,
                            }}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: content.lat,
                                    longitude: content.long,
                                }}
                                title={content.title}
                            />
                        </MapView></View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const eventStyles = StyleSheet.create({
    boxFirst: {
        height: 227,
        backgroundColor: '#FFF'
    },
    box: {
        height: 227,
        marginTop: 11,
        backgroundColor: '#FFF'
    },
    boxHeader: {
        flexDirection: 'row',
        margin: 15,
    },
    boxImage: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    boxHeaderText: {
        marginLeft: 15,
        marginTop: 1
    },
    boxTitle: {
        fontSize: 18,
        color: '#808080',
        fontWeight: 'bold'
    },
    boxSubtitle: {
        marginTop: 5,
        fontSize: 13,
        color: '#808080',
    },
    boxBy: {
        fontSize: 14,
        color: '#808080',
    },
    boxMap: {
        height: 100,
        padding: 5
    },
    boxMapText: {
        fontSize: 14,
        marginLeft: 15
    }
})