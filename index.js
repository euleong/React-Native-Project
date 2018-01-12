// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
// const App = () => {
//     return (
//         <Text>Some Text</Text> // jsx
//     );
// };

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>

);

// Render it to the device
// params:
// albums name must match project directory
// return function for first component to render
AppRegistry.registerComponent('albums', () => App);
