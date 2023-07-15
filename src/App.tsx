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
import { StatusBar } from 'react-native';
import { useColorScheme } from 'nativewind';


function App(): JSX.Element {


  const { colorScheme, setColorScheme } = useColorScheme();

  return (
<>
<StatusBar backgroundColor={ colorScheme === 'light' ? 'rgb(226 232 240)' : "rgb(30 41 59)" }barStyle= {colorScheme === 'light' ? 'dark-content' : "light-content"} />
<NavigationContainer>
      <MyStack />
    </NavigationContainer>
</>
    

  );
}

export default App;
