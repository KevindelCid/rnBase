import React, { useEffect, useState } from 'react'
import { NativeStackView, createNativeStackNavigator, } from "@react-navigation/native-stack"
import { AuthHook } from "../Hooks/AuthHook"
import { useAppSelector } from "../Store/hooks"
import { SupraExample } from '../Screens/SupaExample/SupraExample'
import { SimpleLoading } from '../Screens/Loadings/SimpleLoading'
import { Login } from '../Screens/Auth'
import { StartupContainer } from '../Screens/StartupContainer'
import { Settings } from '../Screens/Settings'
import { BHeader } from '../Components/Layout'
import { useColorScheme } from 'nativewind'


const Stack = createNativeStackNavigator()


export function MyStack() {

  const { userInfo, isLoading } = AuthHook()
  console.log("🚀 ~ file: App.tsx:52 ~ MyStack ~ userInfo:", userInfo)

  const isAuth = useAppSelector(state => state.auth.authenticated)
  console.log("🚀 ~ file: App.tsx:55 ~ MyStack ~ isAuth:", isAuth)

  useEffect(() => {
    console.log("holis", isAuth)

  }, [isAuth])

  const { colorScheme, setColorScheme } = useColorScheme();

  return (

    <Stack.Navigator
      initialRouteName={userInfo.session ? "SupraExample" : "Login"}
      screenOptions={{ headerStyle: { backgroundColor: colorScheme === 'light' ? 'rgb(226 232 240)' : "rgb(30 41 59)" }, headerTitleStyle: { fontWeight: "400", color: colorScheme === 'light' ? 'black' : "white" }, 
      headerTintColor: colorScheme === 'light' ? 'black' : 'white' 
    }}
    >

      {userInfo.session ?
        <Stack.Screen name='StartupContainer' component={StartupContainer} options={{
          header: ({ navigation }) => <></>
        }} />
        : isLoading ? <Stack.Screen name='SimpleLoading' component={SimpleLoading} /> : <Stack.Screen name='Login' component={Login}  options={{
          header: ({ navigation }) => <></>
        }}/>
      }

      <Stack.Group screenOptions={{
        header: ({ navigation }) => <BHeader navigation={navigation} />
      }} >
        <Stack.Screen name='SupraExample' component={SupraExample} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Group>

    </Stack.Navigator>
  )
}

