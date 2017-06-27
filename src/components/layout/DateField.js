import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, TextInput, StyleSheet, DatePickerAndroid, TimePickerAndroid, Platform, TouchableHighlight } from 'react-native';

export default class DateField extends Component {
    constructor(props){
        super(props);
        this.openDatePicker = this.openDatePicker.bind(this);
        this.openDatePickerAndroid = this.openDatePickerAndroid.bind(this);        
    }

    openDatePicker(){
        if(Platform.OS == 'android') this.openDatePickerAndroid();
    }

    async openDatePickerAndroid(){
        try{
            let now = new Date();
            const {action: actionDate, year, month, day} = await DatePickerAndroid.open({ date: now });
            if (actionDate !== DatePickerAndroid.dismissedAction) {
                const {action: actionTime, hour, minute} = await TimePickerAndroid.open({ 
                    hour: now.getHours(),
                    minute: now.getMinutes()
                });
                if (actionTime !== TimePickerAndroid.dismissedAction) {
                    this.props.onChange(`${("0"+day).slice(-2)}/${("0"+month).slice(-2)}/${year} ${("0"+hour).slice(-2)}:${("0"+minute).slice(-2)}`);
                } else
                    this.props.onChange('');
            } else
                this.props.onChange('');
        } catch(e){
            console.warn('Não foi possível abrir o DatePickerAndroid');
        }
    }

    render(){
        const { icon, value, children } = this.props;
        return (
            <View style={dateFieldStyles.container}>
                <View style={dateFieldStyles.icon}>
                    <Icon name={icon} color='#888888' />
                </View>
                <View style={dateFieldStyles.date}>
                    <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => this.openDatePicker()}>
                        <TextInput style={{color: '#383838'}} value={value} placeholder={children} editable={false} underlayColor='transparent' underlineColorAndroid='transparent' />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const dateFieldStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1
    },
    date: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    icon: {
        marginTop: 13,
        marginLeft: 10
    }
});