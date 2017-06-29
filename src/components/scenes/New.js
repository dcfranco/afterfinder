import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { ScrollView, View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import DateField from '../layout/DateField';
import TextField from '../layout/TextField';
import Checkbox from '../layout/Checkbox';

export default class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventName: '',
            eventDate: '',
            eventMode: false,
            eventLocation: {}
        }

        this.onEventNameChange = this.onEventNameChange.bind(this);
        this.onEventDateChange = this.onEventDateChange.bind(this);
        this.onEventModeChange = this.onEventModeChange.bind(this);
        this.onEventLocationChange = this.onEventLocationChange.bind(this);
    }

    onEventNameChange(text){
        this.setState({ eventName: text });
    }

    onEventDateChange(date){
        this.setState({ eventDate: date });
    }

    onEventModeChange(){
        this.setState({ eventMode: !this.state.eventMode })
    }

    onEventLocationChange(location){
        this.setState({ eventLocation: location });
    }

    render() {
        const {navigation} = this.props;

        return (
            <ScrollView>
                <View>
                    <View style={formStyle.form}>
                        <TextField icon='subject' onChange={this.onEventNameChange} value={this.state.eventName} firstUpCase={true}>Nome do evento</TextField>
                        <DateField icon='today' onChange={this.onEventDateChange} value={this.state.eventDate}>Data do evento</DateField>
                        <Checkbox onClick={this.onEventModeChange} checked={this.state.eventMode}>Evento privado</Checkbox>
                    </View>
                    
                    <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => navigation.navigate('SelectLocal', { onSelectLocal: this.onEventLocationChange, localSelected: this.state.eventLocation })}>
                        { this.state.eventLocation.numero ? 
                            <View style={formStyle.address}>
                                <View style={formStyle.left}>
                                    <View style={formStyle.icon}><Icon name='directions' color='#888888'/></View>
                                    <View>
                                        <Text style={formStyle.address1}>{`${this.state.eventLocation.rua}, ${this.state.eventLocation.numero}`}</Text>
                                        <Text style={formStyle.address2}>{`${this.state.eventLocation.bairro} - ${this.state.eventLocation.cidade}, ${this.state.eventLocation.estado}`}</Text>
                                    </View>
                                </View>
                            </View>
                        :   <View style={formStyle.message}>
                                <Text style={formStyle.address1}>Localizar endereço</Text>
                                <Text style={formStyle.address2}>Pressione aqui para selecionar o local</Text>
                            </View> }
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}

const formStyle = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        margin: 10
    },
    message: {
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    address: {
        backgroundColor: '#FFF',
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    address1: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 17
    },
    address2: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 14
    },
    icon: {
        margin: 5
    },
    left:{
        flex: 1,
        flexDirection: 'row',
    },
});