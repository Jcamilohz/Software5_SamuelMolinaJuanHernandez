import React from 'react';
import Navigation from './src/navigation/Navigation';
import { enableScreens } from 'react-native-screens';
import AppProvider from './src/Context/AppProvider';

enableScreens();

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

export default App;
