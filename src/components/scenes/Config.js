import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Text, ScrollView, View, StyleSheet, TouchableHighlight } from 'react-native';

import axios from 'axios';

export default class Config extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            selected: false,
            locations: []
        }
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(text){
        this.setState({search: text});

        if(text.length > 3){
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${text}`).then((response) => {
                if(response && response.data && response.data.results && response.data.results.length > 0){
                    let {results} = response.data;
                    this.setState({locations: results.map(addresses => {
                        let location = {};
                    
                        addresses.address_components.map(addrItem => {
                            if(addrItem.types.indexOf('street_number') >= 0) location.numero = addrItem.short_name;
                            if(addrItem.types.indexOf('route') >= 0) location.rua = addrItem.long_name;
                            if(addrItem.types.indexOf('sublocality') >= 0) location.bairro = addrItem.short_name;
                            if(addrItem.types.indexOf('administrative_area_level_2') >= 0) location.cidade = addrItem.short_name;
                            if(addrItem.types.indexOf('administrative_area_level_1') >= 0) location.estado = addrItem.short_name;
                            if(addrItem.types.indexOf('country') >= 0) location.pais = addrItem.long_name;
                        });

                        location.coordinate = { ...addresses.geometry.location };
                        return location;
                    })});
                }
            });
        }
    }

    render() {
        const showLocal = this.state.locations[0] && this.state.locations[0].rua && this.state.locations[0].numero && 
                        this.state.locations[0].bairro && this.state.locations[0].cidade && this.state.locations[0].estado;
        return (
            <ScrollView>
                <View>
                    <View style={formStyle.form}>
                        <TextField icon='find-replace' onChange={this.onChangeSearch} value={this.state.search} firstUpCase={true}>Digite o endereço</TextField>
                    </View>
                    { showLocal ?
                    <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => this.setState({selected: !this.state.selected})}>
                        <View style={formStyle.address}>
                            <View style={formStyle.left}>
                                <View style={formStyle.icon}><Icon name='directions' color='#888888'/></View>
                                <View>
                                    <Text style={formStyle.address1}>{`${this.state.locations[0].rua}, ${this.state.locations[0].numero}`}</Text>
                                    <Text style={formStyle.address2}>{`${this.state.locations[0].bairro} - ${this.state.locations[0].cidade}, ${this.state.locations[0].estado}`}</Text>
                                </View>
                            </View>
                            <View style={formStyle.iconPressed}>{this.state.selected && <Icon name='done' color='#008000'/>}</View>
                        </View>
                    </TouchableHighlight>
                    :
                    <View style={formStyle.message}>
                        <Text style={formStyle.address1}>Pesquise seu endereço acima</Text>
                        <Text style={formStyle.address2}>Pressione aqui quando encontrar o local</Text>                        
                    </View>}
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
    left:{
        flex: 1,
        flexDirection: 'row',
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
    iconPressed: {
        alignItems: 'flex-end'
    }
});