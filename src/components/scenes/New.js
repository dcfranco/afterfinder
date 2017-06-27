import React, { Component } from 'react';
import { ScrollView, View, StyleSheet,  } from 'react-native';

import DateField from '../layout/DateField';
import TextField from '../layout/TextField';
import Checkbox from '../layout/Checkbox';

export default class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            eventName: '',
            eventDate: '',
            eventMode: false
        }

        this.onEventNameChange = this.onEventNameChange.bind(this);
        this.onEventDateChange = this.onEventDateChange.bind(this);
        this.onEventModeChange = this.onEventModeChange.bind(this);
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

    render() {
        return (
            <ScrollView>
                <View>
                    <View style={formStyle.form}>
                        <TextField icon='subject' onChange={this.onEventNameChange} value={this.state.eventName} firstUpCase={true}>Nome do evento</TextField>
                        <DateField icon='today' onChange={this.onEventDateChange} value={this.state.eventDate}>Data do evento</DateField>
                        <Checkbox onClick={this.onEventModeChange} checked={this.state.eventMode}>Evento privado</Checkbox>
                    </View>
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
});