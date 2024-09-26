import React from 'react';
import Navigation from './src/navigation/Navigation';
import { enableScreens } from 'react-native-screens';
enableScreens(); 

function App(): React.JSX.Element {
  return (
    <Navigation />

  );
}

export default App;
