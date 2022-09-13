import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import AboutScreen from './About';

const Drawer = createDrawerNavigator();

function AlbumsScreen() {
    return (
        <View>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </View>
    );
}
export default AlbumsScreen;