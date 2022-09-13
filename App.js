import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AlbumsScreen from './android/Albums';
import LibraryScreeen from './android/Library';
import PurchaseScreen from './android/Purchase';
import FavouritesScreen from './android/Favourites';
import { NavigationContainer } from '@react-navigation/native';
import ProileScreen from './android/Proile';
import Settingscreen from './android/Settings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Library" component={LibraryScreeen} />
      <Tab.Screen name="Purchase" component={PurchaseScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
    <Tab.Navigator>
    <Tab.Screen name="Profile" component={ProileScreen} />
    <Tab.Screen name="Settings" component={Settingscreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;