import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthHook } from "../Hooks/AuthHook"
import { useAppSelector } from "../Store/hooks"
import { SupraExample } from '../Screens/SupaExample/SupraExample'
import { SimpleLoading } from '../Screens/Loadings/SimpleLoading'
import { Login } from '../Screens/Auth'

const Stack = createNativeStackNavigator()


export function MyStack(){

  const { userInfo, isLoading } = AuthHook() 
  console.log("🚀 ~ file: App.tsx:52 ~ MyStack ~ userInfo:", userInfo)

  const isAuth = useAppSelector(state => state.auth.authenticated)
  console.log("🚀 ~ file: App.tsx:55 ~ MyStack ~ isAuth:", isAuth)
  
  useEffect(() => {
   console.log("holis", isAuth)
   
  }, [isAuth])
  

  return (
    <Stack.Navigator 
    initialRouteName={userInfo.session ? "SupraExample": "Login" } 
    screenOptions={{
      header: ({ navigation }) => <>
      {/* <Button title='settings' onPress={()=> navigation.navigate('Settings')} />
      <Button title='create users' onPress={()=> navigation.navigate('CreateUsers')} /> */}
      </>,
    }}
    >
     
     { userInfo.session ? 
     <Stack.Screen name='SupraExample' component={SupraExample} />
     : isLoading ? <Stack.Screen name='SimpleLoading' component={SimpleLoading}/> :<Stack.Screen name='Login' component={Login} />
     }

      
    </Stack.Navigator>
  )
}

