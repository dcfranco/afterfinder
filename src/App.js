import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

import Home from './components/scenes/Home';
import Events from './components/scenes/Events';
import New from './components/scenes/New';
import Map from './components/scenes/Map';
import SelectLocal from './components/scenes/SelectLocal';

const homeImage = require('./imgs/home.png');
const eventsImage = require('./imgs/events.png');
const newImage = require('./imgs/new.png');
const socialImage = require('./imgs/social.png');
const configImage = require('./imgs/config.png');

const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Image source={homeImage} style={{ width: 20, height: 20, tintColor: tintColor }} />,
        },
    },
    Events: {
        screen: Events,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Image source={eventsImage} style={{ width: 20, height: 20, tintColor: tintColor }} />,
        },
    },
    New: {
        screen: New,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Image source={newImage} style={{ width: 20, height: 20,  tintColor: tintColor }} />,
        },
    },
    Social: {
        screen: Events,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <Image source={socialImage} style={{ width: 20, height: 20, tintColor: tintColor }} />,
        },
    },
}, {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: { backgroundColor: '#FFF', borderBottomColor: '#CCC', borderBottomWidth: 0.5 },
            tabStyle: { backgroundColor: '#FFF' },
            activeTintColor: '#0F9BB9',
            inactiveTintColor: '#888'
        }
    });

const Main = StackNavigator({
    Main: {
        screen: Tabs,
        navigationOptions: ({ navigation }) => ({
            title: 'After Finder',
            headerStyle: {
                backgroundColor: '#0F9BB9',
            },
            headerTitleStyle: {
                color: '#FFF'
            },
            headerRight: (
                <TouchableHighlight activeOpacity={1} underlayColor='transparent' onPress={() => navigation.navigate('Config')}>
                    <Image source={configImage} style={{ width: 25, height: 25, marginRight: 25 }} />
                </TouchableHighlight>
            )
        })
    },
    SelectLocal: {
        screen: SelectLocal,
        navigationOptions: {
            title: 'Selecionar o local',
            headerStyle: {
                backgroundColor: '#0F9BB9',
            },
            headerTitleStyle: {
                color: '#FFF'
            },
            headerTintColor: '#FFF'
        }
    },
    Map: {
        screen: Map,
        navigationOptions: ({ navigation }) => ({
            title: `Localização ${navigation.state.params.event.title}`,
            headerStyle: {
                backgroundColor: '#0F9BB9',
            },
            headerTitleStyle: {
                color: '#FFF'
            },
            headerTintColor: '#FFF'
        })
    }
});

export default class App extends Component {
    render() {
        return (
            <Main />
        );
    }
}