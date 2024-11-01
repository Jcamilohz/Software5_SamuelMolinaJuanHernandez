import React from 'react';
import Navigation from './src/navigation/Navigation';
import { enableScreens } from 'react-native-screens';
import AppProvider from './src/Context/AppProvider';
import Toast from 'react-native-toast-message';

enableScreens();

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <Navigation />
      <Toast />
    </AppProvider>
  );
}

export default App;
