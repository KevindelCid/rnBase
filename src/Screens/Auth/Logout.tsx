import React, {useState} from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import { supabase } from '../../utils/supabase'

export const Logout = ({navigation}: any) => {

    const [ isLoading, setIsLoading ] = useState(false)
    const logout = async () => {
        setIsLoading(true)
        try {
           supabase.auth.signOut()
            navigation.navigate('Login')
        } catch (error) {
            console.log("🚀 ~ file: Logout.tsx:11 ~ logout ~ error:", error)
            
        } finally{
            setIsLoading(false)
        }
        
    }


  return (
    <View>
        { isLoading && <ActivityIndicator/>}
        <Button title={'Logout'} onPress={logout} />
    </View>
  )
}
