import React from 'react';
import theme from './src/Theme';
import LongTimers from './src/Utils/LongTimer';
import 'react-native-gesture-handler';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as AuthProvider } from './src/Providers/AuthContext';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Components/Navigation';

export default function App() {
  LongTimers();
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <StatusBar style='light' />
        <Navigation/>
      </PaperProvider>
    </AuthProvider>
  );
}