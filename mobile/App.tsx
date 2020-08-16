import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

// Fonts
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

// Routes
import AppStack from './src/routes/appStack';

export default function App() {
  let [ fontsLoading ] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if(!fontsLoading) {
    return <AppLoading />;
  } else {    
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

