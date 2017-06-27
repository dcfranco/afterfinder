import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';

import Home from './components/scenes/Home';
import Events from './components/scenes/Events';
import New from './components/scenes/New';
import Config from './components/scenes/Config';

const homeImage = require('./imgs/home.png');
const eventsImage = require('./imgs/events.png');
const newImage = require('./imgs/new.png');
const socialImage = require('./imgs/social.png');
const configImage = require('./imgs/config.png');

const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: () => <Image source={homeImage} style={{ width: 20, height: 20 }} />,
        },
    },
    Events: {
        screen: Events,
        navigationOptions: {
            tabBarIcon: () => <Image source={eventsImage} style={{ width: 20, height: 20 }} />,
        },
    },
    New: {
        screen: New,
        navigationOptions: {
            tabBarIcon: () => <Image source={newImage} style={{ width: 20, height: 20 }} />,
        },
    },
    Social: {
        screen: Events,
        navigationOptions: {
            tabBarIcon: () => <Image source={socialImage} style={{ width: 20, height: 20 }} />,
        },
    },
}, {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: { backgroundColor: "#FFF" },
            tabStyle: { backgroundColor: "#FFF" }
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
    Config: {
        screen: Config,
        navigationOptions: {
            title: 'Configurações',
            headerStyle: {
                backgroundColor: '#0F9BB9',
            },
            headerTitleStyle: {
                color: '#FFF'
            },
            headerTintColor: '#FFF'
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <Main />
        );
    }
}