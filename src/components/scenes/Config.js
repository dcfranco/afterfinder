import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';

import axios from 'axios';

export default class Config extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            locations: []
        }
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(text){
        this.setState({search: text});
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${text}`).then((response) => {
            if(response && response.data && response.data.results && response.data.results.length > 0){
                let {results} = response.data;
                this.setState({locations: results.map(addresses => {
                    const {address_components: addr} = addresses;

                    return {
                        numero: addr.filter(addrItem => addrItem.types.indexOf('street_number') >= 0)[0] && addr.filter(addrItem => addrItem.types.indexOf('street_number') >= 0)[0].short_name || '',
                        rua: addr.filter(addrItem => addrItem.types.indexOf('route') >= 0)[0] && addr.filter(addrItem => addrItem.types.indexOf('route') >= 0)[0].short_name,
                        bairro: addr.filter(addrItem => addrItem.types.indexOf('political') >= 0)[0] && addr.filter(addrItem => addrItem.types.indexOf('political') >= 0)[0].short_name,
                        cidade: addr.filter(addrItem => addrItem.types.indexOf('administrative_area_level_2') >= 0)[0] && addr.filter(addrItem => addrItem.types.indexOf('administrative_area_level_2') >= 0)[0].short_name,
                        estado: addr.filter(addrItem => addrItem.types.indexOf('administrative_area_level_1') >= 0)[0] && addr.filter(addrItem => addrItem.types.indexOf('administrative_area_level_1') >= 0)[0].short_name,
                        pais: addr.filter(addrItem => addrItem.types.indexOf('country') >= 0)[0] && addr.filter(addrItem => addrItem.types.indexOf('country') >= 0)[0].short_name,
                    }
                })});
            }
        });
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <View style={formStyle.form}>
                        <TextField icon='find-replace' onChange={this.onChangeSearch} value={this.state.search} firstUpCase={true}>Digite o endereço</TextField>
                    </View>
                    { this.state.locations[0] &&
                    <View style={formStyle.form}>
                        <Text>{`${this.state.locations[0].rua}, ${this.state.locations[0].numero}`}</Text>
                        <Text>{`${this.state.locations[0].bairro} - ${this.state.locations[0].cidade}, ${this.state.locations[0].estado}`}</Text>
                    </View> }
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