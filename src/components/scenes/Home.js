import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Event from '../widgets/Event'

export default class Home extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <ScrollView>
                <Event
                    first
                    navigation={navigation}
                    content={{
                        perfil: 'http://www.unicos.cc/wp-content/uploads/2016/11/rodrigo-perfil-380x285.jpg',
                        title: 'Backyard',
                        type: 'Privado',
                        by: 'Galera\'s Bar',
                        lat: -26.934284,
                        long: -48.628141,
                        stringDist: 'Itajai - Há 7km de distância'
                    }}
                />
                <Event
                    navigation={navigation}
                    content={{
                        perfil: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/18527597_1369562576464008_5967151554248106611_n.jpg?_nc_ad=z-m&oh=35d53daa2e526ce26ccc009a4e4c027b&oe=59E2D6C8',
                        title: 'After do Warung',
                        type: 'Privado',
                        by: 'Daniel',
                        lat: -26.8739888,
                        long: -49.0481062,
                        stringDist: 'Blumenau - Há 40km de distância'
                    }}
                />
                <Event
                    navigation={navigation}
                    content={{
                        perfil: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/18527597_1369562576464008_5967151554248106611_n.jpg?_nc_ad=z-m&oh=35d53daa2e526ce26ccc009a4e4c027b&oe=59E2D6C8',
                        title: 'After do Warung',
                        type: 'Privado',
                        by: 'Daniel',
                        lat: -26.8739888,
                        long: -49.0481062,
                        stringDist: 'Blumenau - Há 40km de distância'
                    }}
                />
            </ScrollView>
        );
    }
}