import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Linking, Button } from 'react-native';
import MapView from 'react-native-maps';

const mapStyle = require('../../map/style.json');
const { width, height } = Dimensions.get('window');

export default class Map extends Component {
    constructor(props) {
        super(props);

        const ratio = (width - 15) / 105;
        this.latitudeDelta = 0.0020;
        this.longitudeDelta = this.latitudeDelta * ratio;
    }

    render() {
        const { event } = this.props.navigation.state.params;
        return (
            <View style={mapStyles.box}>
                <View style={mapStyles.boxMap}>
                    <MapView
                        style={{...StyleSheet.absoluteFillObject}}
                        customMapStyle={mapStyle}
                        region={{
                            latitude: event.lat,
                            longitude: event.long,
                            latitudeDelta: this.latitudeDelta,
                            longitudeDelta: this.longitudeDelta
                        }}
                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: event.lat,
                                longitude: event.long,
                            }}
                            title={event.title}
                            description={event.type}
                        />
                    </MapView>
                </View>
                <View>
                    <Button title='Navegar até o evento' color='#0F9BB9' onPress={() => Linking.openURL(`google.navigation:q=${event.lat},${event.long}`)} />
                </View>
            </View>
        );
    }
}

const mapStyles = StyleSheet.create({
    box: {
        ...StyleSheet.absoluteFillObject
    },
    boxMap: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});