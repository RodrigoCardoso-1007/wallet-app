/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import UnLoggedNavigation from './src/navigation/UnLogged.navigation';
import { NavigationContainer } from "@react-navigation/native";

function App(): JSX.Element {
  const Navigation = UnLoggedNavigation;

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
