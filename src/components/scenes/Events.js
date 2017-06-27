import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import EventLine from '../widgets/EventLine'

const mapStyle = require('../../map/style.json');

const { width, height } = Dimensions.get('window');

export default class Events extends Component {
    constructor(props) {
        super(props);

        const ratio = (width - 15) / 105;        
        this.latitudeDelta = 0.0020;
        this.longitudeDelta = this.latitudeDelta * ratio;
        this.onEventClick = this.onEventClick.bind(this);

        this.state = {            
            events: []
        }
    }

    componentWillMount() {
        let events = [{
            perfil: 'http://www.unicos.cc/wp-content/uploads/2016/11/rodrigo-perfil-380x285.jpg',
            title: 'Backyard',
            description: '(somente convidados)',
            stringDist: 'Há 7km',
            lat: -26.934284,
            long: -48.628141,
            selected: true
        }, {
            perfil: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/18527597_1369562576464008_5967151554248106611_n.jpg?_nc_ad=z-m&oh=35d53daa2e526ce26ccc009a4e4c027b&oe=59E2D6C8',
            title: 'After do Warung',
            description: '(somente convidados)',
            stringDist: 'Há 40km',
            lat: -26.8739888,
            long: -49.0481062,
        }];
        
        this.setState({events});
    }

    onEventClick(content) {
        this.setState({ events: this.state.events.map(event => {
            if(content == event) event.selected = true;
            else event.selected = false;

            return event;
        })});
    }
    
    render() {
        let selectedEvent = this.state.events.filter(event => event.selected)[0];

        return (
            <ScrollView>
                <MapView
                    style={eventsStyles.boxMap}
                    customMapStyle={mapStyle}
                    region={{
                        latitude: selectedEvent.lat,
                        longitude: selectedEvent.long,
                        latitudeDelta: this.latitudeDelta,
                        longitudeDelta: this.longitudeDelta
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: selectedEvent.lat,
                            longitude: selectedEvent.long,
                        }}
                        title={selectedEvent.title}
                    />
                </MapView>
                { this.state.events.map((event, index) => {
                    return (
                        <EventLine
                            key={index}
                            selected={(event==selectedEvent)}
                            onClick={this.onEventClick}
                            content={event}
                        />
                    );
                }) }
            </ScrollView>
        );
    }
}

const eventsStyles = StyleSheet.create({
    box: {
        height: 100,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        padding: 10
    },
    boxImage: {
        borderWidth: 1,
        borderColor: '#CCC',
        width: 75,
        height: 75,
        borderRadius: 50,
        marginTop: 3
    },
    boxHeaderText: {
        marginLeft: 15,
        marginTop: 10
    },
    boxTitle: {
        fontSize: 20,
        color: '#808080',
        fontWeight: 'bold'
    },
    boxDescription: {
        color: '#CCC',
        fontSize: 14,
        margin: 5
    },
    boxDistance: {
        fontSize: 16,
        marginTop: 5
    },
    boxMap: {
        height: (height / 2)
    },
    image: {
        width: 20,
        height: 20
    }
})