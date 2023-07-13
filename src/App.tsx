/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-url-polyfill/auto'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './Stack/MyStack';


function App(): JSX.Element {
  return (

    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}

export default App;
