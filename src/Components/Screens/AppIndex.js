import React from 'react';
import DrawerMenu from '../Navigation/Drawer'
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

const AppIndex = () => {
    return (
        <PaperProvider>
            <StatusBar style="light"/>
            <DrawerMenu/>
        </PaperProvider>
    )
}

export default AppIndex;