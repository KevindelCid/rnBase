/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './Store/slices/counterSlice';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UsersListExample } from './Screens/UsersListExample';
import { UsersDetailsExample } from './Screens/UsersDetailsExample';

const Stack = createNativeStackNavigator()


function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='UsersListExample' component={UsersListExample} />
      <Stack.Screen name='UsersDetailsExample' component={UsersDetailsExample} />
    </Stack.Navigator>
  )
}





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

 const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()



  return (
   
<>
 <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Button title='-' onPress={()=>{
            dispatch(decrement())
          }}/>
            
          <Text style={{ paddingHorizontal: 10 }}>{counter}</Text>
          <Button title='+' onPress={()=>{
            dispatch(increment())
            
          }}/>


        </View>

    <NavigationContainer>
          <MyStack/>
    </NavigationContainer>

      </>
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
